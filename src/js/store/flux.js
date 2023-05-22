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
      createTodo: async (url) => {
        try {
          let alertResponded = await createNewTodo(url);
          console.log(`createTodo result: ${alertResponded.message}`);
        }
        catch (error) {
          console.log(`create todo error: ${error}`);
        }
      },
      getAllTodos: async (url) => {
        try {
          let [alertResponded, todos] = await getAll(url);
          console.log(`get all todos result: ${alertResponded.message}`);
          setStore({ ...getStore(), todos: todos });
        }
        catch (error) {
          console.log(`get all todos error: ${error}`);
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
