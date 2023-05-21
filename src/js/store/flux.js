const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'http://assets.breatheco.de/apis/fake/todos/user/',
      user: 'andreszabala',
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
