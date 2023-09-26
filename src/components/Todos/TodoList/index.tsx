import Todo from '../Todo/index.tsx';
import styles from './style.module.scss';

function TodoList({ todos }: { todos: string[] }) {
  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
