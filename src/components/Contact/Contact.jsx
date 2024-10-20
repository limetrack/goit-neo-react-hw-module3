import React from 'react';
import styles from './Contact.module.css';

function Contact({ contact, deleteContact }) {
  return (
    <li className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoItem}>
          <span className={styles.icon}>👤</span>
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactInfoItem}>
          <span className={styles.icon}>📞</span>
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
