import React, { Component } from 'react';

export default class App extends Component {
  //In the form of states
  state = {
    users : [
      {
        id:101, name: "Sabina", password : "32145788f"
      },
      {
        id:102, name: "Prasuma", password : "4578jk"
      },
      {
        id:103, name: "Sajana", password : "3256re"
      }
    ],
    isLoggedIn: false

  }

  render() {
    //Data from the state
    const newUsers = this.state.users.map( (user)=>{
      console.log(user);
      return <h1 key={user.id}>
        ID:{user.id} Name: {user.name} Password: {user.password}</h1>
    })
    const arr = [20, 30, 40, 50, 60];
    const newlogged = this.state.isLoggedIn
    console.log(" login: ", newlogged)
    //If passed as the props
    const arr1 = this.props.numbers;
   
    console.log("Old array", arr);
    return (
      <div>

        {/* returning the data of the state */}
        <h1> 
          {newUsers}
        </h1>
        <ul>{
          //Map method is used here 
          arr.map((num)=>{
            return <li>{num}</li>})
            }

            {
          //This data came as a props. 
          arr1.map(  (num) =>{
            return <li>{num * 2}</li>

            })
            }
        </ul>
      </div>
    )
  }
}
