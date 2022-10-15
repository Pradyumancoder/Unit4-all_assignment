import styles from "./Button.module.css";

function Button({ disabled,children,action }) {
  return (
    <button disabled={disabled} className={styles.button} onClick={action} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
