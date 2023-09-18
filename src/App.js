import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import Delete from "./Components/Delete/Delete";
import Edit from "./Components/Edit/Edit";
import Users from "./Components/Users/Users";

function App() {
  return (
    <div className="App">
      <Users />
      {/* <AddUser />
      <Edit />
      <Delete /> */}
    </div>
  );
}

export default App;
