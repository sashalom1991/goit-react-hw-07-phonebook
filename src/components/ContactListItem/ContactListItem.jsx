
export default function ContactListItem  ({contact}) {
    return (
        <li key={contact.id}>
            <span>
              <b>{contact.name}</b>: {contact.number}
            </span>

            <button
              type="button"  
            >
              Delete
            </button>
          </li>
      );
    }