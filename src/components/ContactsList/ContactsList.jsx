import styles from './style.module.css';
import { selectVisibleContacts } from '../../store/selectors/contacts-selectors';
import { useSelector } from 'react-redux';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../store/reduxRTK';

const ContactsList = () => {
  const filter = useSelector(state => state.filter);

  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const deleteButtonHandler = id => {
    deleteContact(id);
  };

  if (contacts) {
    const contactsList = selectVisibleContacts(contacts, filter);

    return (
      <ul>
        {isLoading && <div>Загрузка...</div>}
        {contactsList.map(contact => {
          return (
            <li className={styles.FilterItem} key={contact.id}>
              {contact.name}: {contact.phone}
              <button
                name="delete"
                type="text"
                onClick={() => deleteButtonHandler(contact.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default ContactsList;
