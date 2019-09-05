import React, {useState} from 'react';
import {Person} from './Person/Person.js';
import './App.css';

function App() {
  const [personState, currentPersonState] = useState (
    {
      person: [
        {id: 1,name: "Max", age: "24", child: "sam"},
        {id: 2,name: "Ravi", age: "22", child: "sakshi"},
        {id: 3,name: "Pawa", age: "34", child: "saumya"}
      ]
    }
  );
  const [showPersonState, othercurrentPersonState] = useState (
    {
      showPerson : true
    }
  );
  const namechanged = (event, index) =>{
    debugger;
    const name = event.target.value;
    const personIndex = personState.person.findIndex(x => x.id===index)
    const persons = [...personState.person];
    persons[personIndex].name = name;
    currentPersonState({
      person: persons
    })
  }
  const deletePerson = (indexPerson) => {
    debugger;
    const persona = [...personState.person]
    persona.splice(indexPerson,1)
    currentPersonState({
      person: persona
    })
  }
  const  toggleshowPerson = () => {
    const doshow = showPersonState.showPerson;
    othercurrentPersonState({
      showPerson : !doshow
    })
  }
  let person = null;
  if(showPersonState.showPerson){
    person = (
      <div>
        {personState.person.map((per,index) => {
          return <Person click={() => deletePerson(index)} name={per.name} age={per.age}
                  changed={(event) => namechanged(event, per.id)}/>
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <button onClick={toggleshowPerson}>Click</button>
      {person}
    </div>
  );
}

export default App;
