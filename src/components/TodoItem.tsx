import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: {
    id: string;
    content: string;
  };
  index: number;
}

function TodoItem({ todo, index }: TodoItemProps) {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.todo}
        >
          {todo.content}
        </div>
      )}
    </Draggable>
  );
}

export default TodoItem;
