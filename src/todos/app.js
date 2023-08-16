// //* Para importar un archivo html podemos poner un nombre cualquiera
// //* en este caso 'html' y en la parte de from ponemos la dirección del archivo
// //* pero con ' ?raw ' al final, esto quiere decir que queremos que lo importe
// //* pero en crudo el código html.
// import html from './app.html?raw';
// import todoStore, { Filters } from '../store/todo.store';
// import { renderTnodos, renderPending } from './use-cases';


// const ElementIDs = {
//     ClearCompletedButton: '.clear-completed',
//     TodoList: '.todo-list',
//     NewTodoInput: '#new-todo-input',
//     TodoFilters: '.filtro',
//     PendingCount: '#pending-count',
// }

// /**
//  *
//  * @param {String} elementId
//  */
// export const App = (elementId) => {

//     const displayTodos = () => {
//         const todos = todoStore.getTodo(todoStore.getCurrentFilter());
//         renderTodos(ElementIDs.TodoList, todos);
//         updatePendingCount();
//     }

//     const updatePendingCount = () => {
//         renderPending(ElementIDs.PendingCount);
//     }

//     //* Cuando la función App() se llama
//     (() => {
//         const app = document.createElement('div');
//         //* No esta mal que el código HTML forme parte del código JS, pero
//         //* si son más de 4 líneas, entonces lo mejor seria crear un nuevo
//         //* archivo html.
//         app.innerHTML = html;
//         document.querySelector(elementId).append(app);
//         displayTodos();
//     })();

//     // Referencias HTML
//     const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
//     const todoListUL = document.querySelector(ElementIDs.TodoList);
//     const clearCompletedButton = document.querySelector(ElementIDs.ClearCompletedButton);
//     const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

//     // Listeners
//     //* 'keyup' -> cuando se presiona y se suelta una tecla.
//     newDescriptionInput.addEventListener('keyup', (event) => {
//         // console.log(event);                 //* Imprime el KeyBoardEvent
//         // console.log(event.target);          //* Elemento HTML
//         // console.log(event.target.value);    //* Ultimo valor obtenido

//         if (event.keyCode !== 13) return;
//         if (event.target.value.trim().length === 0) return;

//         todoStore.addTodo(event.target.value);
//         displayTodos();
//         event.target.value = '';
//     });

//     todoListUL.addEventListener('click', (event) => {
//         //* 'closest' -> Busca el elemento padre más cercano que tenga el atributo 'data-id'.
//         const element = event.target.closest('[data-id]');

//         //* 'getAttribute' -> Permite obtener el valor del atributo 'data-id'.
//         // console.log(element.getAttribute('data-id'));

//         todoStore.toggleTodo(element.getAttribute('data-id'));
//         displayTodos();
//     });

//     todoListUL.addEventListener('click', (event) => {
//         const isDestroyElement = event.target.className === 'destroy';
//         const element = event.target.closest('[data-id]');

//         if (!element || !isDestroyElement) return;

//         todoStore.deleteTodo(element.getAttribute('data-id'));
//         displayTodos();
//     });

//     clearCompletedButton.addEventListener('click', () => {
//         todoStore.deleteCompleted();
//         displayTodos();
//     });

//     //* filtersLIs es un arreglo de elementos con la clase filtro
//     filtersLIs.forEach(element => {
//         element.addEventListener('click', (element) => {
//             filtersLIs.forEach(el => el.classList.remove('selected'));
//             element.target.classList.add('selected');

//             switch (element.target.text) {
//                 case 'Todos':
//                     todoStore.setFilter(Filters.All);
//                     break;
//                 case 'Pendientes':
//                     todoStore.setFilter(Filters.Pending);
//                     break;
//                 case 'Completados':
//                     todoStore.setFilter(Filters.Completed);
//                     break;
//             }
//             displayTodos();
//         });
//     });
// }
