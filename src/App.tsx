import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  function addTodo() {
    if (input.trim() === "")
  return alert("Enter a Task'")
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setInput("");
  }

  function deleteTodo(id: number) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md">

        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          ✅ Todo App
        </h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          {todo.length} task{todo.length !== 1 ? "s" : ""} total
        </p>

        {/* Input Row */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1 bg-gray-800 text-white placeholder-gray-500 
                       rounded-xl px-4 py-3 text-sm outline-none border border-gray-700 
                       focus:border-violet-500 transition-colors"
          />
          <button
            onClick={addTodo}
            className="bg-violet-600 hover:bg-violet-500 active:scale-95
                       text-white font-semibold px-5 py-3 rounded-xl 
                       transition-all duration-150 text-sm"
          >
            Add
          </button>
        </div>

        {/* Empty State */}
        {todo.length === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">📝</p>
            <p className="text-gray-500 text-sm">No tasks yet! Add one above.</p>
          </div>
        )}

        {/* Todo List */}
        <ul className="flex flex-col gap-3">
          {todo.map((i) => (
            <li
              key={i.id}
              className="flex items-center justify-between bg-gray-800 
                         rounded-xl px-4 py-3 border border-gray-700 
                         hover:border-gray-600 transition-colors"
            >
              {/* Task text */}
              <span className="text-sm text-white">{i.text}</span>

              {/* Delete button */}
              <button
                onClick={() => deleteTodo(i.id)}
                className="text-gray-600 hover:text-red-400 
                           transition-colors text-lg ml-4"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>

        {/* Clear All */}
        {todo.length > 0 && (
          <button
            onClick={() => setTodo([])}
            className="mt-6 w-full text-gray-500 hover:text-red-400 
                       text-sm transition-colors py-2"
          >
            Clear all tasks
          </button>
        )}

      </div>
    </div>
  );
}

export default App;