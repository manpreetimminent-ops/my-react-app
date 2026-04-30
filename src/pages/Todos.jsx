import { useState, useEffect } from 'react';
import TodoCard from '../components/TodoCard';
import AddTodo  from '../components/AddTodo';

function Todos() {
  const [todos, setTodos]     = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://todo-api-production-f59c.up.railway.app/todos')
      .then(r => r.json())
      .then(d => { setTodos(d); setLoading(false); });
  }, []);

  const handleAdd      = (t)  => setTodos([t, ...todos]);
  const handleDelete   = async (id) => {
    await fetch(`https://todo-api-production-f59c.up.railway.app/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(t => t._id !== id));
  };
  const handleComplete = async (id) => {
    const res = await fetch(`https://todo-api-production-f59c.up.railway.app/todos/${id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true }),
    });
    const updated = await res.json();
    setTodos(todos.map(t => t._id === id ? updated : t));
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div style={{ padding: '1rem', width: '800px', margin: '0 auto' }}>
      <h2>My Todos ({todos.length})</h2>
      <AddTodo onAdd={handleAdd} />
      {todos.map(todo => (
        <TodoCard key={todo._id} todo={todo}
          onDelete={handleDelete} onComplete={handleComplete} />
      ))}
    </div>
  );
}
export default Todos;
