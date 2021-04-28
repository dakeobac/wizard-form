import React from 'react';
import { useFormikContext } from 'formik';

const Survey = () => {
  const {   
    handleBlur,
    handleChange,
    values,
  } = useFormikContext();

  return (
      <div className="stack">
        <label htmlFor="message" style={{display: `grid`}}>
          What's your message?
          <textarea 
            type="text" 
            id="message"
            name="message"
            rows="5"
            value={values.foo}
            onChange={handleChange}
            onBlur={handleBlur}
          /> 
        </label>
      </div>
  );
}

export default Survey;