import { useDelContactMutation } from "../../redux/contacts/contactsSlice";
import s from './ContactsList.module.css';


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
              className={s.btn}  
            >
              Delete
            </button>
          </li>
      );
    }