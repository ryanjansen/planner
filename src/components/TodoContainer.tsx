import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import styles from "./TodoContainer.module.css"

interface TodoContainerProps {
  id: string;
  todos: [
    {
      id: string;
      content: string;
    }
  ];
}

function TodoContainer({ id, todos }: TodoContainerProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos</h1>
      <Droppable droppableId={id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoContainer;
