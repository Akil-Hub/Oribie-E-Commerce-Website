import React from 'react';

const Input = ({ handleChange, value, title, color, name, id }) => {
  return (
    <section className="options py-2">
      <fieldset className="flex gap-2 cursor-pointer">
        <label htmlFor={id} className={` flex flex-row-reverse gap-2`}>
          {title}

          <input
            type="radio"
            onChange={handleChange}
            value={value}
            name={name}
            className={ color}
            
          />
        </label>
      </fieldset>
    </section>
  );
};

export default Input;
