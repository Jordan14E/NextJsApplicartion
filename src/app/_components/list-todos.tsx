import { api } from "@models/trpc/server";

export default async function ListTodos() {
  const todosList = await api.todo.getAll.query;

  return (
    <div>
      {todosList.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
          <br />
          <h2>{todo.description}</h2>
        </div>
      ))}
    </div>
  );
}
