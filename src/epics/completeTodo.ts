import { filter, map } from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { completeTodo } from '../actions/todo';

export const completeTodoEpic = (action$: Observable<Action>) =>
    action$.pipe(
        filter(completeTodo.started.match),
        map(action => {
            console.log('completeTodoStartedMatched');
            return completeTodo.done({
                params: action.payload,
                result: {
                    todoId: action.payload.todoId
                }
            });
        }));