import { HTMLProps } from 'react';
import { FunctionComponent, PropsWithChildren } from 'react';
import styles from './style.module.scss';

interface IButtonProps extends HTMLProps<HTMLButtonElement> {}

const Button: FunctionComponent<PropsWithChildren<IButtonProps>> = ({
  title,
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={styles.myButton}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
