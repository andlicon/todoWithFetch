const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      todos: [],
      alert: null
    },
    actions: {

      getAllTodos: () => {
        //get all todoss
      },
      createTodo: () => {
        //create a todo
      },
      deleteTodo: () => {
        //delete a todo
      },
      throwAlert: () => {
        //throw an alert
      }
    }
  };
};

export default getState;
