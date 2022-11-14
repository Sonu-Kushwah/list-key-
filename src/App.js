import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = [
    {
      id: 101,
      name: "sonu",
      age: 28,
      city: "gwalior",
    },
    {
      id: 102,
      name: "Jyoti",
      age: 24,
      city: "Gwalior",
    },
    {
      id: 103,
      name: "Honney",
      age: 2,
      city: "Gwalior",
    },
    {
      id: 101,
      name: "Sona",
      age: 24,
      city: "Gwalior",
    },
  ];
  return (
    <>
      <h3>List and Uniqe key and Filter</h3>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>age</th>
          <th>City</th>
        </tr>
        {user.map((item, i) => 
         // let { id, name, age, city } = item;
          item.id===101?
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>:null     
        )
        }
      </table>
    </>
  );
}

export default App;
