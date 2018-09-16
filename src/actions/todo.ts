import { Todo } from '../model/model';
import actionCreatorFactory from 'typescript-fsa';

// These interfaces are also used in the reducer handlers
export interface TodoPayload {
    todo: Todo;
}

export interface TodoIdPayload {
    todoId: number;
}

export interface CompleteTodoDonePayload {
    params: TodoIdPayload;
    result: TodoIdPayload;
}

const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<TodoPayload>('ADD_TODO');
export const completeTodo = actionCreator.async<TodoIdPayload, TodoIdPayload>('COMPLETE_TODO');
export const completeTodoStarted = completeTodo.started; // this is so redux.bindActions finds it automatically
export const uncompleteTodo = actionCreator<TodoIdPayload>('UNCOMPLETE_TODO');
export const deleteTodo = actionCreator<TodoIdPayload>('DELETE_TODO');
