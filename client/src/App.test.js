import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import App from "./App";
import { render } from "@testing-library/react";
import useLocalStorage from './hooks/useLocalStorage';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test("NavBar is working correctly", () => {
  render(<NavBar/>);
})

test("useLocalStorage is working correctly", () => {
  render(useLocalStorage);
})

