import styles from './style.module.scss';

function Todo({ todo }: { todo: string }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}> {todo}</div>
    </div>
  );
}
export default Todo;
