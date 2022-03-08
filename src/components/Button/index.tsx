import styles from './styles.module.scss';
type ButtonProps = {
  children: string;
  primary?: boolean;
};

const Button = ({ children, primary }: ButtonProps) => {
  return (
    <button className={`btn ${primary ? styles.btnPrimary : ''}`}>
      {children}
    </button>
  );
};

export default Button;
