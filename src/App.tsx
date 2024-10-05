import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DeviceVerifier from './components/DeviceVerifier';
import RoutesApp from './RoutesApp';

function App() {
  return (
    <BrowserRouter>
      <DeviceVerifier>
        <RoutesApp />
      </DeviceVerifier>
    </BrowserRouter>
  );
}

export default App;
