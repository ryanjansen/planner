import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import styled from 'styled-components';

interface TodoContainerProps {
  id: string;
  todos: [
    {
      id: string;
      content: string;
    }
  ];
}

const Container = styled.div`
  background-color: #fff;
  min-width: 300px;
  color: #000;
  min-height: 500px;
`;

const Title = styled.h1`
  padding: 10px;
  margin: 0;
`;

const TaskList = styled.div`
  padding: 10px;
`;

function TodoContainer({ id, todos }: TodoContainerProps) {
  return (
    <Container>
      <Title>Todos</Title>
      <Droppable droppableId={id}>
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default TodoContainer;
