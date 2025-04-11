import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 20px;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .promo-text {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textColor};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    min-height: 45px; /* Added min-height */
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }

  button {
    padding: 12px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const CreditForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementare la logica di invio
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <FormWrapper>
      <h3>Registrati per i Crediti Gratuiti</h3>
      <p className="promo-text">
        Le prime 100 persone riceveranno 1000 crediti di test gratuiti!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Il tuo nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="La tua email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrati Ora</button>
      </form>
    </FormWrapper>
  );
};

export default CreditForm;