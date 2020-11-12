import React, { useState } from 'react';
import List from "./components/List";
import "./styles/index.css";

interface Content {
  Item: string
}

function App() {
  const [list, setList] = useState<Array<Content>>([]);

  const add = () => {

    setList([...list, {
      Item: "Dissolution " + list.length + 1
    }]);

  }

  return (
    <div className="app">
      <h2>Give away</h2>

      <List ListContent={list} />

      <button 
        name="btn-increment" 
        className="btn-increment" 
        onClick={add}
      >
        Give it away
      </button>
    </div>
  );
}

export default App;
