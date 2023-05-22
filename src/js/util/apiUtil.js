export const createNewTodo = async (source) => {
  let alert = null;
  let message = '';
  let type = '';

  try {
    const response = await fetch(source, {
      method: 'POST',
      body: JSON.stringify([]),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    if (response.ok) message = data.result;
    if (!response.ok) message = data.msg;

    type = response.ok;
  }
  catch (error) {
    message = error.message;
    type = false;
  }
  finally {
    alert = {
      message,
      type
    }
  }

  return alert;
}

export const getAll = async (source) => {
  let alert = null;
  let message = '';
  let type = '';
  let results = null;

  try {
    const response = await fetch(source);
    const data = await response.json();

    if (response.ok) {
      message = 'Yo hace recived all yours todo sucessfull';
      results = data;
    }
    if (!response.ok) message = data.msg;

    type = response.ok;
  }
  catch (error) {
    message = error.message;
    type = false;
  }
  finally {
    alert = {
      message,
      type
    }
  }

  return [alert, results];
}

export const updateEntireList = async (source, newList) => {

}

export const deleteItems = async (source) => {

}