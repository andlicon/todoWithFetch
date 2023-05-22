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
      createTodo: async () => {
        const url = getStore().urlBase + getStore().user;

        try {
          await createNewTodo(url);
        }
        catch (error) {
          console.log(`create todo error: ${error}`);
        }
      },
      getAllTodos: async () => {
        const url = getStore().urlBase + getStore().user;

        try {
          let [, todos] = await getAll(url);
          setStore({ ...getStore(), todos: todos });
        }
        catch (error) {
          console.log(`get all todos error: ${error}`);
        }
      },
      updateEntireList: (list) => {
        console.log(list);
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
