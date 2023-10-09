import Todo from '../Todo/index.tsx';
import styles from './style.module.scss';

function TodoList({
  todos,
  deleteTodo,
}: {
  todos: string[];
  deleteTodo: (index: number) => void;
}) {
  return (
    <div className={styles.todoList}>
      {!todos.length ? (
        <h3> Todo list is empty </h3>
      ) : (
        todos.map((todo, index) => (
          <Todo todo={todo} key={index} deleteTodo={() => deleteTodo(index)} />
        ))
      )}
    </div>
  );
}

export default TodoList;
