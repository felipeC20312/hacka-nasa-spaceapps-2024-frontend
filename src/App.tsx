import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DeviceVerifier from './components/DeviceVerifier';
import RoutesApp from './RoutesApp';
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <DeviceVerifier>
          <RoutesApp />
        </DeviceVerifier>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
