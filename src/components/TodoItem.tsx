import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
interface TodoItemProps {
  todo: {
    id: string;
    content: string;
  };
  index: number;
}
interface IContainer {
  isDragging: boolean
}

const Container = styled.div<IContainer>`
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

function TodoItem({ todo, index }: TodoItemProps) {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging} 
        >
          {todo.content}
        </Container>
      )}
    </Draggable>
  );
}

export default TodoItem;
