import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  ActionWithId,
  ActionWithTodo,
  ActionWithActiveTodoCount,
  ActionWithUserId,
} from "../types";
import {
  getTodosDB,
  toggleCompletedDB,
  addTodoDB,
  deleteTodoDB,
  toggleAllDB,
  clearCompletedDB,
  changeTodoDB,
} from "../api/index";
import {
  FETCH_TODOS,
  GET_TODOS,
  TOGGLE_COMPLETED,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  CHANGE_TODO,
  ADD_ERROR,
} from "../consts";

export default function* rootSaga() {
  yield all([
    fetchTodos(),
    toggleCompleted(),
    addTodo(),
    deleteTodo(),
    toggleAll(),
    clearCompleted(),
    changeTodo(),
  ]);
}

function* fetchTodos() {
  yield takeEvery(FETCH_TODOS, fetchTodosAsync);
}

function* fetchTodosAsync(action: ActionWithUserId) {
  try {
    const todos = yield call(() => getTodosDB(action.payload.userId));
    yield put({ type: GET_TODOS, payload: { todos } });
  } catch (error) {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "fetch todo error" } },
    });
  }
}

function* toggleCompleted() {
  yield takeEvery(TOGGLE_COMPLETED, toggleCompletedAsync);
}

function* toggleCompletedAsync(action: ActionWithTodo) {
  try {
    yield call(() => toggleCompletedDB(action.payload.todo));
  } catch {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "toggle todo error" } },
    });
  }
}

function* addTodo() {
  yield takeEvery(ADD_TODO, addTodoAsync);
}

function* addTodoAsync(action: ActionWithTodo) {
  try {
    yield call(() => addTodoDB(action.payload.todo));
  } catch {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "add todo error" } },
    });
  }
}

function* deleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodoAsync);
}

function* deleteTodoAsync(action: ActionWithId) {
  try {
    yield call(() => deleteTodoDB(action.payload.id));
  } catch {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "delete todo error" } },
    });
  }
}

function* toggleAll() {
  yield takeEvery(TOGGLE_ALL, toggleAllAsync);
}

function* toggleAllAsync(action: ActionWithActiveTodoCount) {
  try {
    yield call(() => toggleAllDB(action.payload.activeTodoCount));
  } catch {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "toggle all todos error" } },
    });
  }
}

function* clearCompleted() {
  yield takeEvery(CLEAR_COMPLETED, clearCompletedAsync);
}

function* clearCompletedAsync() {
  try {
    yield call(() => clearCompletedDB());
  } catch {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "clear completed error" } },
    });
  }
}

function* changeTodo() {
  yield takeEvery(CHANGE_TODO, changeTodoAsync);
}

function* changeTodoAsync(action: ActionWithTodo) {
  try {
    yield call(() => changeTodoDB(action.payload.todo));
  } catch {
    yield put({
      type: ADD_ERROR,
      payload: { error: { code: "change todo error" } },
    });
  }
}
