
console.log('test')
export interface Todo {
description : string 
}

let todos: Todo[]= [
    {
    "description":"ma premiere todo"
    },
    {
     "description":"ma deuxieme todo"
    },
    {
    "description":"ma troisieme todo"
    }
]
const todolist: Element | null = document.querySelector('.todolist')

todos.forEach( (todo: Todo )=> {
    if(todolist){ 
    todolist.innerHTML +=`
    <div class="todo"> 
    <p>${todo.description}<p>
    <input type="checkbox">
    </div>
    `
}
    
});
