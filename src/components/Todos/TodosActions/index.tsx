import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../../UI/Button';
import styles from './style.module.scss';

function TodoActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}: {
  completedTodosExist: boolean;
  resetTodos: () => void;
  deleteCompletedTodos: () => void;
}) {
  return (
    <div className={styles.todoActions}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodoActions;
