import styles from './style.module.css';
// import { selectVisibleContacts } from '../../store/selectors/contacts-selectors';
// import { selectFilterContacts } from '../../store/selectors/filters-selectors';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../store/reduxRTK';

const ContactsList = () => {
  // const filter = selectFilterContacts();
  // const contacts = useSelector(state => selectVisibleContacts(state));

  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const deleteButtonHandler = id => {
    deleteContact(id);
  };

  return (
    <ul>
      {isLoading && <div>Загрузка...</div>}
      {data &&
        data.map(contact => {
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
};

export default ContactsList;
