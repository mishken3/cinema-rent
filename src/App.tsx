import 'normalize.css';
import './App.scss';

import { AutoRent, Catalog, Footer, MainPage } from './pages';

function App() {
  return (
    <div>
      <MainPage />
      <Catalog />
      <AutoRent />
      <Footer />
    </div>
  );
}

export default App;
