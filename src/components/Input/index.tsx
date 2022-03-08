import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
}

const Input = ({ id, name, label, ...props }: InputProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} name={name} {...props} />
    </>
  );
};

export default Input;
