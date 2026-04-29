function TodoCard({ todo, onDelete, onComplete }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      margin: '0.5rem 0',
      background: todo.completed ? '#E3F5EC' : 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <h3 style={{ margin: '0 0 4px',
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#111'
        }}>{todo.title}</h3>
        <p style={{ margin: 0, fontSize: '13px' }}>
          {todo.completed ? '✅ Done' : '⏳ Pending'}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        {!todo.completed && (
          <button
            onClick={() => onComplete(todo._id)}
            style={{ padding: '6px 12px', background: '#1D9E75',
              color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
          >✓ Done</button>
        )}
        <button
          onClick={() => onDelete(todo._id)}
          style={{ padding: '6px 12px', background: '#E24B4A',
            color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >🗑 Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;