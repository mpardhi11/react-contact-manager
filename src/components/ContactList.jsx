import ContactCard from "./ContactCard";

const ContactList = ({ contacts = [], deleteContactHandler }) => {
  return contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.guid}
        clickHandler={deleteContactHandler}
      />
    );
  });
};

export default ContactList;
