import React, { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const contactsData = await response.json();
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setNewContact({
      firstName: '',
      lastName: '',
      phone: ''
    });
  };

  const handleSaveContact = () => {
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        id: Date.now(),
        name: `${newContact.firstName} ${newContact.lastName}`,
        phone: newContact.phone
      }
    ]);
    handleCancelForm();
  };

  return (
    <div>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handleShowForm}>Add New Contact</button>
      </div>

      {showForm && (
        <div>
          <h2>Add New Contact</h2>
          <form>
            <label>
              First Name:
              <input
                type="text"
                value={newContact.firstName}
                onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={newContact.lastName}
                onChange={(e) => setNewContact({ ...newContact, lastName: e.target.value })}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="text"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              />
            </label>
            <br />
            <button type="button" onClick={handleSaveContact}>
              Save
            </button>
            <button type="button" onClick={handleCancelForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
