import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const validateEmail = (email) => {
    // Проста перевірка на наявність @ у електронній адресі
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (phone) => {
    // Перевірка, що номер телефону складається тільки з цифр і має довжину 12
    return /^\d{12}$/.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валідація ім'я
    if (!formData.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Ім\'я обов\'язкове для заповнення'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: ''
      }));
    }

    // Валідація електронної пошти
    if (!formData.email || !validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Введіть коректну електронну пошту'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ''
      }));
    }

    // Валідація телефону
    if (!formData.phone || !validatePhone(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Введіть коректний номер телефону (12 цифр)'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </label>
      </div>

      <div>
        <label>
          Електронна пошта:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </label>
      </div>

      <div>
        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </label>
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
};

export default Form;
