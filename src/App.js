import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header title="Beer App!" />

      <Outlet />
    </div>
  );
}

export default App;
