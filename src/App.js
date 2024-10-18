import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ17r745DzK4Cbhznqy1ggKjGqr3_ket04IA&s")'
    }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <h2>안녕하세요!</h2>
      </header>
    </div>
  );
}

export default App;