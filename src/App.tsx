import 'normalize.css';
import './App.scss';

import { AutoRent, Catalog, MainPage } from './pages';

function App() {
  return (
    <div>
      <MainPage />
      <Catalog />
      <AutoRent />
    </div>
  );
}

export default App;
