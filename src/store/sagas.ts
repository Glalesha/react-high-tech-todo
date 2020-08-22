import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  ActionWithId,
  ActionWithTodo,
  ActionWithActiveTodoCount,
} from "../types";
import {
  getTodosDB,
  toggleCompletedDB,
  addTodoDB,
  deleteTodoDB,
  toggleAllDB,
  clearCompletedDB,
} from "../api/index";
import {
  FETCH_TODOS,
  GET_TODOS,
  TOGGLE_COMPLETED,
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
  yield takeEvery(FETCH_TODOS, fetchTodosAsync);
}

function* fetchTodosAsync() {
  try {
    const todos = yield call(() => getTodosDB());
    yield put({ type: GET_TODOS, payload: { todos } });
  } catch {}
}

function* toggleCompleted() {
  yield takeEvery(TOGGLE_COMPLETED, toggleCompletedAsync);
}

function* toggleCompletedAsync(action: ActionWithTodo) {
  try {
    yield call(() => toggleCompletedDB(action.payload.todo));
  } catch {}
}

function* addTodo() {
  yield takeEvery(ADD_TODO, addTodoAsync);
}

function* addTodoAsync(action: ActionWithTodo) {
  try {
    yield call(() => addTodoDB(action.payload.todo));
  } catch {}
}

function* deleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodoAsync);
}

function* deleteTodoAsync(action: ActionWithId) {
  try {
    yield call(() => deleteTodoDB(action.payload.id));
  } catch {}
}

function* toggleAll() {
  yield takeEvery(TOGGLE_ALL, toggleAllAsync);
}

function* toggleAllAsync(action: ActionWithActiveTodoCount) {
  yield call(() => toggleAllDB(action.payload.activeTodoCount));
}

function* clearCompleted() {
  yield takeEvery(CLEAR_COMPLETED, clearCompletedAsync);
}

function* clearCompletedAsync() {
  yield call(() => clearCompletedDB());
}
