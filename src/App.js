
import './App.css';
import Mynav from './Pages/Mynav'
import Myroute from './Pages/Myroute'
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Mynav></Mynav>
      <Myroute></Myroute>
      </BrowserRouter>
    </div>
  );
}

export default App;
