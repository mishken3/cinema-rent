import 'normalize.css';
import './App.scss';

import { AutoRent, Catalog, MainPage } from './pages';

function App() {
  return (
    <div>
      <MainPage />
      <Catalog />
      <AutoRent />
      <div id="footer"></div>
    </div>
  );
}

export default App;
