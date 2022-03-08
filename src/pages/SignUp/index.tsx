import useForm from '../../hooks/useForm';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './styles.module.scss';

const SignUp = () => {
  const firstname = useForm(' ');
  const lastname = useForm(' ');
  const email = useForm('email');
  const password = useForm(' ');

  return (
    <main className={styles.signup}>
      <div className={`container ${styles.content}`}>
        <section className={styles.wrapper}>
          <h1>Learn to code by Watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great. but understanding how developers think
            is invaluable.
          </p>
        </section>

        <section>
          <a className={`btn ${styles.link}`}>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </a>
          <form className={styles.form}>
            <Input
              name="firstname"
              label="First Name"
              type="text"
              placeholder="First Name"
              {...firstname}
            />

            <Input
              name="lastname"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              {...lastname}
            />

            <Input
              name="email"
              label="Email Adress"
              type="email"
              placeholder="Email Address"
              {...email}
            />

            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              {...password}
            />

            <Button primary>CLAIM YOUR FREE TRIAL</Button>
            <p>
              By clicking the button, you are agreeing to our{' '}
              <a>Terms and Services</a>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
