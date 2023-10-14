import { useState } from 'react';
import type { FormEventHandler } from 'react';
import Button from '../../UI/Button';
import styles from './style.module.scss';

function TodoForm({ addTodo }: { addTodo: (text: string) => void }) {
  const [text, setText] = useState<string>('');

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
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
      <Button type="submit" title="Submit">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
