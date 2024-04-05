export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: Date.now(),
            text,
            isDone: false
        }
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    };
};