import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <header className='App-header'>
          <img src={require("../src/assets/WolfTVText.png")} />
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#more'>More</a></li>
          <input type="text" className='NavBar-input' placeholder='Find Something...'></input>
        </header>
      </ul>
      <div id='home'>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h1 className='Intro-title'>WOLF TV</h1>
        <h2>hi</h2>
      </div>
    </div>
  );
}

export default App;
