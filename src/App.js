import './App.css';
import Header from './components/Header';
import Form from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Form />
      </div>
    </div>
  );
}

export default App;
