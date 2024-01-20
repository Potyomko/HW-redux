import React from "react";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { List } from "./List";

export const App = () => {
  return (
    <div>
      <h1>Phone Book</h1>
      <Form />
      <Filter/>
      <h2>Contacts</h2>
      <List/>
    </div>
  );
};