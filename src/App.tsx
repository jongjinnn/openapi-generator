import { useState } from "react";
import "./App.css";

const list = [
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Dave",
  },
];

function App() {
  const [users, setUsers] = useState(list);
  const [addUserInput, setAddUserInput] = useState("");

  const removeUsers = (id: string) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const addUsers = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item = {
      id: String(crypto.randomUUID()),
      name: addUserInput,
    };

    const newUsers = [...users, item];
    setUsers(newUsers);

    setAddUserInput("");
    console.log(item);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddUserInput(event.target.value);
  };

  return (
    <ul>
      <form onSubmit={addUsers}>
        <input value={addUserInput} onChange={onInputChange} />
        <button type="submit">add</button>
      </form>
      {users.map((user) => (
        <li key={user.id} onClick={() => removeUsers(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default App;
