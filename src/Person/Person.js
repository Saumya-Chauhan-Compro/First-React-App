import React from "react";

export const Person = (maze) => {
    const [personState, currentPersonState] = useState (
        {
          person: [
            {id: 1,name: "Max", age: "24", child: "sam"},
            {id: 2,name: "Ravi", age: "22", child: "sakshi"},
            {id: 3,name: "Pawa", age: "34", child: "saumya"}
          ]
        }
      );
    return (
    <div>
        <h2 onClick={maze.click}>I am {maze.name} and my age is {maze.age}</h2>
        <h3>{maze.children}</h3>
        <input type="text" value={maze.name} onChange={maze.changed}/>
    </div>
   );
}


