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
      updateEntireList: async (list) => {
        const url = getStore().urlBase + getStore().user;

        try {
          let alertResponsed = await updateEntireList(url, list);

          if (alertResponsed.type) setStore({ ...getStore(), todos: list });

          getActions().throwAlert(alertResponsed);
        }
        catch (error) {
          getActions().throwAlert({ message: error.message, type: false });
        }

      },
      deleteTodo: () => {
        //delete a todo
      },
      throwAlert: (alert) => {
        setStore({ ...getStore(), alert });
      }
    }
  };
};

export default getState;
