import { db } from "../firebase/index";
import { Todo } from "../types/index";

export const getTodosDB = async () => {
  const snapshot = await db.collection("Todos").get();
  return snapshot.docs.map((item: { data(): void | object }) => {
    return item.data();
  });
};

export const toggleCompletedDB = async (todo: Todo) => {
  const snapshot = await db
    .collection("Todos")
    .where("id", "==", todo.id)
    .get();
  snapshot.forEach((doc: { id: string }) => {
    db.collection("Todos").doc(doc.id).update({
      completed: !todo.completed,
    });
  });
};

export const addTodoDB = async (todo: Todo) => {
  await db.collection("Todos").add(todo);
};

export const deleteTodoDB = async (id: number) => {
  const snapshot = await db.collection("Todos").where("id", "==", id).get();
  snapshot.docs.forEach((doc: { ref: { delete(): void } }) => {
    doc.ref.delete();
  });
};

export const toggleAllDB = async (activeTodoCount: number) => {
  const snapshot = await db.collection("Todos").get();
  snapshot.docs.forEach(
    (doc: { ref: { update({ completed }: { completed: boolean }): void } }) => {
      doc.ref.update({
        completed: !!activeTodoCount,
      });
    }
  );
};

export const clearCompletedDB = async () => {
  const snapshot = await db.collection("Todos").get();
  snapshot.docs.forEach(
    (doc: {
      ref: { delete(): void };
      data(): { [propName: string]: boolean };
    }) => {
      if (doc.data().completed) {
        doc.ref.delete();
      }
    }
  );
};
