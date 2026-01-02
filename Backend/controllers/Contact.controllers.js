const ContactModel = require("../Models/Contact.model");

function formatDate(date) {
  if (!date) return null;
  const formattedDate = new Date(date);
  const day = formattedDate.getDate().toString().padStart(2, "0");
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = formattedDate.getFullYear();
  return `${month}-${day}-${year}`;
}

class ContactController {

  // ✅ Get all contacts
  static async getAllContacts(req, res) {
    try {
      const contacts = await ContactModel.find().lean();

      const mappedArray = contacts.map(contact => ({
        _id: contact._id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        createDate: formatDate(contact.createDate),
        code: contact.code
      }));

      res.status(200).json({ data: mappedArray });

    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Something went wrong while fetching contacts"
      });
    }
  }

  // ✅ Create contact
  static async createContact(req, res) {
    try {
      const newContact = new ContactModel(req.body);
      await newContact.save();

      res.status(201).json({
        message: "Contact has been added successfully"
      });

    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Failed to create contact"
      });
    }
  }

  // ✅ Update contact
  static async updateContact(req, res) {
    try {
      const { id } = req.params;

      const updatedContact = await ContactModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!updatedContact) {
        return res.status(404).json({ message: "Contact not found" });
      }

      res.status(200).json({
        message: "Contact updated successfully"
      });

    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Failed to update contact"
      });
    }
  }

  // ✅ Delete contact
  static async deleteContact(req, res) {
    try {
      const { id } = req.params;

      const contact = await ContactModel.findById(id);

      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }

      await ContactModel.findByIdAndDelete(id);

      res.status(200).json({
        message: `${contact.firstName} ${contact.lastName} has been deleted`
      });

    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Failed to delete contact"
      });
    }
  }

  // ✅ Search by name / email / phone
  static async searchByName(req, res) {
    try {
      const { name } = req.query;

      if (!name) {
        return res.status(400).json({ message: "Search query is required" });
      }

      const results = await ContactModel.find({
        $or: [
          { firstName: { $regex: name, $options: "i" } },
          { lastName: { $regex: name, $options: "i" } },
          { email: { $regex: name, $options: "i" } },
          { phoneNumber: { $regex: name } },
          {
            $expr: {
              $regexMatch: {
                input: { $concat: ["$firstName", " ", "$lastName"] },
                regex: name,
                options: "i"
              }
            }
          }
        ]
      }).lean();

      const mappedArray = results.map(contact => ({
        _id: contact._id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        createDate: formatDate(contact.createDate),
        code: contact.code
      }));

      res.status(200).json({ data: mappedArray });

    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Search failed"
      });
    }
  }
}

module.exports = ContactController;
