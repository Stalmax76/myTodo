import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './style.module.scss';

interface ITodo {
  text: string;
  id: string;
  isCompleted: boolean;
}

function Todo({
  todo,
  deleteTodo,
  toggleTodo,
}: {
  todo: ITodo;
  deleteTodo: () => void;
  toggleTodo: () => void;
}) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}> {todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo()}
      />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo()} />
    </div>
  );
}
export default Todo;
