import React from 'react';

const Todo = () => {
    const [task, setTask] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const addTodo = () => {
        if (task.trim()) {
            setTodo([...todo, { text: task, isCompleted: false, id: Date.now() }]);
            setTask(''); // Clear input field
        }
    };

    const completeTask = (id) => {
        setTodo(todo.map((item) =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        ));
    };

    const itemDelete = (id) => {
        setTodo(todo.filter((item) => item.id !== id)); // Create a new array excluding the item with the given id
    };

    return (
        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', border: '1px solid #000' }}>
            <div>
                <h1>To Do List</h1>
            </div>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <div style={{ borderBottom: '1px solid black' }}></div>
            <table>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Task</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todo.length > 0 ? (
                    todo.map((item) => (
                        <tr
                            onClick={() => completeTask(item.id)}
                            style={{
                                cursor: 'pointer',
                                textDecoration: item.isCompleted ? 'line-through' : 'none'
                            }}
                            key={item.id}
                        >
                            <td>{item.length}</td>
                            <td>{item.text}</td>
                            <td>
                                <button onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering completeTask when clicking delete
                                    itemDelete(item.id);
                                }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2">No task added</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Todo;
