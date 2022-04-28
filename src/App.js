import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='App-title'>Welcome to WolfTV!</h1>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#more'>More</a></li>
        </ul>
      </header>
      {/* <header className="App-header">
        <h1 className='App-title'>Welcome to WolfTV!</h1>
        <h3 className='App-title-items' onClick={() => {
          console.log("Clicked Home")
        }}>Home</h3>
        <h3 className='App-title-items'>About</h3>
        <h3 className='App-title-items'>More</h3>
      </header> */}
      <h1 className='Intro-title'>WOLF TV</h1>
      <h2>hi</h2>
    </div>
  );
}

export default App;
