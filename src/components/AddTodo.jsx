import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();           
    if (!title.trim()) return;   

    const res = await fetch('http://localhost:3000/todos', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ title }),
    });
    const newTodo = await res.json();
    onAdd(newTodo);     
    setTitle('');      
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0', display: 'flex', gap: '8px' }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        style={{ padding: '8px', flex: 1, borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', background: '#0C447C', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Add
      </button>
    </form>
  );
}

export default AddTodo;
