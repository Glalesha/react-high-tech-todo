import { all, takeEvery, call, put } from "redux-saga/effects";
import { TodosAction } from "../types";
import { db } from "../firebase/index";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
} from "../consts";

export default function* rootSaga() {
  yield all([
    fetchTodos(),
    toggleCompleted(),
    addTodo(),
    deleteTodo(),
    toggleAll(),
    clearCompleted(),
  ]);
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
          return item.data();
        }
      );
    });
    yield put({ type: GET_TODOS, payload: todos });
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
  yield takeEvery(ADD_TODO, addTodoAsync);
}

function* addTodoAsync(action: any) {
  try {
    const todoId = yield call(async () => {
      const snapshot = await db.collection("Todos").add(action.payload);
      return snapshot.id;
    });
  } catch {}
}

function* deleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodoAsync);
}

function* deleteTodoAsync(action: any) {
  try {
    yield call(async () => {
      const snapshot = await db
        .collection("Todos")
        .where("id", "==", action.payload)
        .get();
      snapshot.docs.forEach((item) => {
        item.ref.delete();
      });
    });
  } catch {}
}

function* toggleAll() {
  yield takeEvery(TOGGLE_ALL, toggleAllAsync);
}

function* toggleAllAsync(action: any) {
  yield call(async () => {
    const snapshot = await db.collection("Todos").get();
    snapshot.docs.forEach((item: any) => {
      item.ref.update({
        completed: !!action.payload,
      });
    });
  });
}

function* clearCompleted() {
  yield takeEvery(CLEAR_COMPLETED, clearCompletedAsync);
}

function* clearCompletedAsync(action: any) {
  yield call(async () => {
    const snapshot = await db.collection("Todos").get();
    snapshot.docs.forEach((item: any) => {
      if (item.data().completed) {
        item.ref.delete();
      }
    });
  });
}
