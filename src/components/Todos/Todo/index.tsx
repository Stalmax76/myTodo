import styles from './style.module.scss';

function Todo({ todo, deleteTodo }: { todo: string; deleteTodo: () => void }) {
  return (
    <div className={styles.todo} onDoubleClick={deleteTodo}>
      <div className={styles.todoText}> {todo}</div>
    </div>
  );
}
export default Todo;
