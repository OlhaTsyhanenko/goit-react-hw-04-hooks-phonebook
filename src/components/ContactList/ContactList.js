import PropTypes from "prop-types";
import styles from "./contactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  console.log(contacts);
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactList__item}>
          {name}: {number}
          <button
            type="submit"
            onClick={() => onDeleteContact(id)}
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
