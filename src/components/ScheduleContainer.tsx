import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import Timeline from "./Timeline";

interface Props {
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
  color: #000;
  min-width: 300px;
  min-height: 500px;
  position: relative;
`;

const Title = styled.h1`
  padding: 10px;
  margin: 0;
`;

const TaskList = styled.div`
  padding: 10px;
`;

function ScheduleContainer({ id, todos }: Props): ReactElement {
  return (
    <Container>
      <Title>Schedule</Title>
      <Timeline />
      <Droppable droppableId={id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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

export default ScheduleContainer;
