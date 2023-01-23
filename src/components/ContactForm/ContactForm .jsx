import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contactsThunk';
import { contact } from 'Redux/selectors';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const contacts = useSelector(contact);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { name, phone };
    contacts.contacts.find(contact => contact.name === name)
      ? toast.error('This contact already exists')
      : dispatch(addContact(formData));
    setFormData({ name: '', phone: '' });
  };

  const { name, phone } = formData;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label} htmlFor="">
        Phone
        <input
          className={css.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="(XXX) XXX-XX-XX"
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.protoTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  handleChange: PropTypes.func,
};
