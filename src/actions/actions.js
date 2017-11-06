export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;

export function addTodos(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}