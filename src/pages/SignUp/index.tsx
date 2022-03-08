import styles from './styles.module.scss';

const SignUp = () => {
  return (
    <main className={`container ${styles.signup}`}>
      <section>
        <h1>Learn to code by Watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great. but understanding how developers think is
          invaluable.
        </p>
      </section>
      <div>
        <button>Try it free 7 days then $20/mo. thereafter</button>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our Terms and Services
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
