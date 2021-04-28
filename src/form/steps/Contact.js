import React from 'react';
import { useFormikContext } from 'formik';

const Contact = () => {
  const {   
    handleBlur,
    handleChange,
    values,
  } = useFormikContext();

  return (
      <div className="stack">
        <label htmlFor='firstname' style={{display: `grid`}}>
          First name
          <input 
            type="text" 
            id="firstname"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          /> 
        </label>

        <label htmlFor="lastname" style={{display: `grid`}}>
          Last name
          <input 
            type="text" 
            id="lastname"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          /> 
        </label>

        <label htmlFor="email" style={{display: `grid`}}>
          Email
          <input 
            type="email" 
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          /> 
        </label>
      </div>
  );
}

export default Contact;