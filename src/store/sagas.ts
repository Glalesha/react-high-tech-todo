import { all, takeEvery, call, put } from "redux-saga/effects";
import { TodosAction } from "../types";
import { db } from "../firebase/index";
import { ADD_TODO, GET_TODOS , ADD_TODO_TO_FIREBASE} from "../consts";

export default function* rootSaga() {
  yield all([fetchTodos(), toggleCompleted(), addTodo()]);
}

function* fetchTodos() {
  yield takeEvery("FETCH_TODOS", fetchTodosAsync);
}

function* fetchTodosAsync(action: any) {
  try {
    const todos = yield call(async () => {
      const snapshot = await db.collection("Todos").get();
      return snapshot.docs.map(
        (item: { data(): void | object; id: string }) => {
          return {
            ...item.data(),
            id: item.id,
          };
        }
      );
    });
    yield put({ type: "GET_TODOS", payload: todos });
  } catch {}
}

function* toggleCompleted() {
  yield takeEvery("TOGGLE_COMPLETED", toggleCompletedAsync);
}

function* toggleCompletedAsync(action: any) {
  try {
    yield call(async () => {
      await db.collection("Todos").doc(action.payload).update({
        completed: !action.payload.completed,
      });
    });
  } catch {}
}

function* addTodo() {
  yield takeEvery(ADD_TODO_TO_FIREBASE, addTodoAsync);
}

function* addTodoAsync(action: any) {
  try {
    const todoId = yield call(async () => {
      const snapshot = await db.collection("Todos").add(action.payload);
      return await snapshot.id;
    });

    yield put({
      type: ADD_TODO,
      payload: {
        ...action.payload,
        id: todoId,
      },
    });
  } catch {}
}
