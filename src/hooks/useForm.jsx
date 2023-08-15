import React from 'react';

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return { formData, handleInputChange };
}