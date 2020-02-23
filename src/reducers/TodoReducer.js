const INITIAL_STATE = {
    todos: [
        {
            id: 'test',
            title: 'test',
            description: 'just a test.'
        }
    ]
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "ADD_TODO":
            state.todos = [...state.todos, action.todo]
            return state;
        
        case "REMOVE_TODO":
            state.todos = state.todos.filter((todo)=>todo.title!==action.todoId);
            return state;
        
        default: 
            return state;
    }
}