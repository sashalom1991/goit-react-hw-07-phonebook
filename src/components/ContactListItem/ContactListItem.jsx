import { useDelContactMutation } from "../../redux/contacts/contactsSlice";

export default function ContactListItem  ({contact}) {
    const [deleteContact] = useDelContactMutation(); 
    return (
        <li key={contact.id}>
            <span>
              <b>{contact.name}</b>: {contact.number}
            </span>

            <button
              type="button"
              onClick={() => deleteContact(contact.id)}  
            >
              Delete
            </button>
          </li>
      );
    }