import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';
import { contactValidationSchema } from '../../validation/contactValidationSchema';
import FormGroup from '../FormGroup/FormGroup';
import styles from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

function ContactForm({ addContact, contacts }) {
  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.find(contact => contact.name === values.name);
    if (duplicate) {
      alert(`${values.name} is already in contacts.`);
    } else {
      addContact({ id: nanoid(), ...values });
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormGroup name="name" label="Name" />
        <FormGroup name="number" label="Number" />

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
