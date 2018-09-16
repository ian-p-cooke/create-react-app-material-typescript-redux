import { combineEpics } from 'redux-observable';
import { completeTodoEpic } from './completeTodo';

export default combineEpics(
    completeTodoEpic
);