import {
  getAll,
  createNewTodo,
  updateEntireList,
  deleteItems
} from '../util/apiUtil';

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
      createTodo: async () => {
        try {
          let response = await createNewTodo(getStore().urlBase + getStore().user);
          console.log(`createTodo result: ${response.message}`);
        }
        catch (error) {
          console.log(`create todo error: ${error}`);
        }
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
