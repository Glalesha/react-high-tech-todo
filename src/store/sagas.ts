import { all, takeEvery, call, put } from "redux-saga/effects";
import { TodosAction } from "../types";
import { db } from "../firebase/index";

export default function* rootSaga() {
  yield all([fetchTodos(), toggleCompleted()]);
}

function* fetchTodos() {
  yield takeEvery("FETCH_TODOS", fetchTodosAsync);
}

function* toggleCompleted() {
  yield takeEvery("TOGGLE_COMPLETED", toggleCompletedAsync);
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

function* toggleCompletedAsync(action: any) {
  try {
    yield call(async () => {
      await db.collection("Todos").doc(action.payload).update({
        completed: !action.payload.completed,
      });
    });
  } catch {}
}
