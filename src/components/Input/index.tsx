import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import ErrorSvg from '../../assets/icon-error.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error: null | string;
}

const Input = ({ name, label, error, ...props }: InputProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={name}
          className={`${styles.input} ${error ? styles.error : ''}`}
          name={name}
          {...props}
        />
        {error && <img src={ErrorSvg} />}
      </div>
      {error && <span className={error ? styles.error : ''}>{`${error}`}</span>}
    </>
  );
};

export default Input;
