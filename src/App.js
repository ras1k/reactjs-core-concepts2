import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{
      border: '2px solid blue',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: 'aqua'
    }}>
      <h3>Name : {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(69);
  const increaseCount = () => setCount(count+1);
  const decreaseCount = () => setCount(count-1);
  return (
  <div>
    <h1> Count : {count}</h1>
    <button onClick={increaseCount}>increase</button>
    <button onClick={decreaseCount}>decrease</button>
  </div>
  )
}

export default App;
