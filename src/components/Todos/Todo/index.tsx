import { RiTodoFill } from 'react-icons/ri';
import styles from './style.module.scss';

function Todo({ todo, deleteTodo }: { todo: string; deleteTodo: () => void }) {
  return (
    <div className={styles.todo} onDoubleClick={deleteTodo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}> {todo}</div>
    </div>
  );
}
export default Todo;
