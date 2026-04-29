import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to My Todo App! 👋</h1>
      <Link to="/todos" style={{
        padding: '10px 24px', marginTop: '20px', display: 'inline-block', background: '#0C447C',
        color: 'white', borderRadius: '6px', textDecoration: 'none'
      }}>
        View My Todos →
      </Link>
    </div>
  );
}
export default Home;
