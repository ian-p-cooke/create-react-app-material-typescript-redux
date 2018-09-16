import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Todo } from '../model/model';
import { ActionCreators } from '../actions';
import { TodoPayload, TodoIdPayload, CompleteTodoDonePayload } from '../actions/todo';

function addTodoHandler(state: Array<Todo>, payload: TodoPayload) {
    return [...state, payload.todo ];
}

function completeTodoDoneHandler(state: Array<Todo>, payload: CompleteTodoDonePayload) {
    return state.map(t => t.id === payload.result.todoId ? { ...t, completed: true } : t);
}

function uncompleteTodoHandler(state: Array<Todo>, payload: TodoIdPayload) {
    return state.map(t => t.id === payload.todoId ? { ...t, completed: false } : t);
}

function deleteTodoHandler(state: Array<Todo>, payload: TodoIdPayload) {
    return state.filter(t => t.id !== payload.todoId);
}

export const todoList = reducerWithInitialState<Array<Todo>>([])
    .case(ActionCreators.addTodo, addTodoHandler)
    .case(ActionCreators.completeTodo.done, completeTodoDoneHandler)
    .case(ActionCreators.uncompleteTodo, uncompleteTodoHandler)
    .case(ActionCreators.deleteTodo, deleteTodoHandler);