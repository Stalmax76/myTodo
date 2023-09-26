import { useState } from 'react';
import styles from './style.module.scss';

function TodoForm({ addTodo }: { addTodo: (text: string) => void }) {
  const [text, setText] = useState<string>('');

  const onSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.todoForm}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
