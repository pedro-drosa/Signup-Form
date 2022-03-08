import Button from '../Button';
import Input from '../Input';

import styles from './styles.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <Input
        id="firstname"
        name="firstname"
        label="First Name"
        type="text"
        placeholder="First Name"
      />
      <Input
        id="lastname"
        name="lastname"
        label="Last Name"
        type="text"
        placeholder="Last Name"
      />
      <Input
        id="email"
        name="email"
        label="Email Adress"
        type="email"
        placeholder="Email Address"
      />
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
      />
      <Button primary>CLAIM YOUR FREE TRIAL</Button>
      <p>
        By clicking the button, you are agreeing to our{' '}
        <a>Terms and Services</a>
      </p>
    </form>
  );
};

export default Form;
