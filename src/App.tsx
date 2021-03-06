import React, { useState } from 'react';

import "./styles/index.css";

import List from "./components/List";
import Form from "./components/Form";

import { Content } from "./interfaces/forms";

function App() {
  const [list, setList] = useState<Array<Content>>([]);

  const addDonationToList = (dataValue : Content) => setList([...list, dataValue]);

  return (
    <div className="app">
      <Form GiveGift={addDonationToList}/>
      <List ListContent={list} />
    </div>
  );
}

export default App;
