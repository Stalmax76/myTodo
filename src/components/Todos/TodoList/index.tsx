import Todo from '../Todo/index.tsx';
import styles from './style.module.scss';
import { ITodo } from '@types';

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}: {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) {
  return (
    <div className={styles.todoList}>
      {!todos.length ? (
        <h3> Todo list is empty </h3>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
