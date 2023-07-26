import { Todo } from '../todos/models/todo.model';

//* La F es mayuscula para indicar de que esto sera una enumeración
export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todo: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la realidad'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    // console.log( state );
    loadStore();
    console.log('InitStore ');
}

/**
 * 
 * @param {String} description 
 */

const loadStore = () => {
    //* localStorage.getItem('state') -> Busca el value con el key 'state' en este caso.
    if ( !localStorage.getItem('state') ) return;
    
    //* JSON.parse(‘string’) ->  El parametro debe ser un string, el método parse se encargará
    //*                          de transformarlo en un objeto.
    const { todo = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    
    state.todo = todo;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    //* localStorage.clear()                   -> limpia el localstorage, pero solo de tu pc.
    //* localStorage.setItem( 'key', 'value' ) -> Ingresa un valor para key y value.  
    
    //* JSON.stringify -> Es un método del objeto JSON que es global en el navegador web
    //* el cual va inicializar como un string lo que este entre parentesis '( )'.
    // console.log( JSON.stringify(state) );

    localStorage.setItem( 'state', JSON.stringify(state) );
}

const getTodo = ( filter = Filters.All ) => {
    switch ( filter ) {
        case Filters.All:
            //* Los objetos se pasan por referencia, necesitamos usar el operador spreed.
            return [...state.todo];
    
        case Filters.Completed:
            return state.todo.filter( todo => todo.done ); //* todo.done === true, la función espera un 'true', asi que es lo mismo.
        
        case Filters.Pending:
            return state.todo.filter( todo => !todo.done );

        default:
            throw new Error(`Option ${ filter } is not valid.`);
    }
}

const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');
    state.todo.push( new Todo(description) );

    saveStateToLocalStorage();
}

const toggleTodo = ( todoId ) => {
    state.todo = state.todo.map( todo => { 
        if ( todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

const deleteTodo = ( todoId ) => {
    state.todo = state.todo.filter( todo => todo.id !== todoId );
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todo = state.todo.filter( todo => !todo.done );
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    // if ( !Object.keys(Filters).includes('All') ) throw new Error('Filter is required'); 
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodo,
    initStore,
    loadStore,
    loadStore,
    setFilter,
    toggleTodo,
}