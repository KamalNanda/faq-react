import React from 'react';
import './App.css';
import FaqList from './faqList'
function App() {
  return (
    <div className="App">
        <h1 className="header" align="center">FAQ</h1>
        <FaqList />
        <footer>Developed By <a href = "https://kamalnanda.github.io" target="_blank">Kamal Nanda</a> in React</footer>
    </div>
  );
}
export default App;