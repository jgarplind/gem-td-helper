import React from "react";
import { c, hover } from "classy-ui";

const header = c(
  "background-color-gray-400",
  hover("background-color-gray-200")
);

function App() {
  return (
    <div className="App">
      <header className={header}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
