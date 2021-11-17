import { useGetContactsQuery } from '../../redux/contacts/contactsSlice';
import { connect } from 'react-redux';
import ContactsListItem from '../ContactListItem/ContactListItem';

import s from './ContactsList.module.css';

const ContactsList = ({searchName}) => {
  const { data } = useGetContactsQuery();
  const normalizedFilter = searchName.toUpperCase();

  return (
    <>{data && (
      <ul className={s.list}>
      {data.filter(contact => contact.name.toUpperCase().includes(normalizedFilter)).map(contactItem => 
          <ContactsListItem contact={contactItem} key={contactItem.id} />
        )}
      </ul>
    )
      
    }
      
    </>
  );
};



const mapStateToProps = state => ({
  searchName: state.filter,
});

export default connect(mapStateToProps)(ContactsList);
