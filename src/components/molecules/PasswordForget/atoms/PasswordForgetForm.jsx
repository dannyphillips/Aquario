import React from 'react';
import Input from '../../../Input';
import Button from '../../../Button';

const PasswordForgetForm = ({
  onSubmit,
  onChange,
  isInvalid,
  error,
  email,
  className,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <Input
        name="email"
        value={email}
        onChange={onChange}
        labelName="Email Address"
        type="text"
        required
      />

      <Button
        disabled={isInvalid}
        type="submit"
        text="Reset my password"
      />

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordForgetForm;
