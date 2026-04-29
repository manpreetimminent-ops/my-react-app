import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home   from './pages/Home';
import Todos  from './pages/Todos';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <nav style={{ padding: '0.5rem 2rem', background: '#f5f5f5', display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path="/"       element={<Home  />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 