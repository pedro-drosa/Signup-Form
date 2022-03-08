import Form from '../../components/Form';
import styles from './styles.module.scss';

const SignUp = () => {
  return (
    <main className={styles.signup}>
      <section className={`container ${styles.content}`}>
        <div className={styles.wrapper}>
          <h1>Learn to code by Watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great. but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div>
          <a className={`btn ${styles.link}`}>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </a>
          <Form />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
