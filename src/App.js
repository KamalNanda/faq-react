import React from 'react';
import './App.css';
import Contact from './Contact/Contact'
import FaqList from './faqList'
function App() {
  return (
    <div className="App">
        <h1 className="header" align="center">FAQ</h1>
        <FaqList />
        <Contact/>
        <footer>Developed By <a href = "https://kamalnanda.github.io" rel="noopener noreferrer" target="_blank">Kamal Nanda</a> in React</footer>
    </div>
  );
}
export default App;
