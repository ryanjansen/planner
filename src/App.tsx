import React, { useState } from 'react';
import styles from './App.module.css';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import TodoContainer from './components/TodoContainer';

interface AppProps {}

interface IDroppable {
  [key: string]: any;
}

interface ITodo {
  [key: string]: any;
}

function App({}: AppProps) {
  const [droppables, setDroppables] = useState<IDroppable>({
    'schedule-container': {
      id: 'schedule-container',
      todoIds: [],
    },
    'todo-container': {
      id: 'todo-container',
      todoIds: ['todo-1', 'todo-2', 'todo-3'],
    },
  });

  const [todos, setTodos] = useState<ITodo>({
    'todo-1': {
      id: 'todo-1',
      content: 'Finish MA1301 Tut 2',
    },
    'todo-2': {
      id: 'todo-2',
      content: 'Finish CS1101S Mission 3',
    },
    'todo-3': {
      id: 'todo-3',
      content: 'Finish IS1301 Quiz 1',
    },
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // If user drops todo outside of droppable
    if (!destination) {
      return;
    }

    // If user drops todo back in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const droppable = droppables[source.droppableId];
    const newTodoIds = [...droppable.todoIds];
    newTodoIds.splice(source.index, 1);
    newTodoIds.splice(destination.index, 0, draggableId);

    const newDroppable = {
      ...droppable,
      todoIds: newTodoIds,
    };

    console.log(newDroppable);

    setDroppables({ ...droppables, [newDroppable.id]: newDroppable });
  };

  const getTodos = (droppableId: string) => {
    return droppables[droppableId].todoIds.map(
      (todoId: string) => todos[todoId]
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TodoContainer
              id={'schedule-container'}
              todos={getTodos('schedule-container')}
            />
          </div>
          <div className={styles.col}>
            <TodoContainer
              id={'todo-container'}
              todos={getTodos('todo-container')}
            />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
