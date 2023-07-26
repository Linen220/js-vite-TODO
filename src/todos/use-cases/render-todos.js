import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

    if ( !element ) 
        element = document.querySelector( elementId );

    //* Si el elemento no existe despues de hacer la asignación arriba, entonces ...
    if ( !element ) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );
    });
}