import { ChangeEvent, useState } from 'react';

interface IValidateTypes {
  [key: string]: { regex: RegExp; message: string };
}

const validateTypes: IValidateTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'looks like this is not an email',
  },
};

const useForm = (type?: string) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<null | string>(null);

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(value);
    setValue(target.value);
  }

  function validate(data: string) {
    if (!type) return true;

    if (value.length === 0) {
      setError('cannot be empty');
      return false;
    }

    if (validateTypes[type] && !validateTypes[type].regex.test(data)) {
      setError(validateTypes[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  return {
    value,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
