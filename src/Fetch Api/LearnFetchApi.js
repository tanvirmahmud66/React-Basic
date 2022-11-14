import React from "react";

export default function LearnFetchApi() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div>
        
    </div>
  );
}
