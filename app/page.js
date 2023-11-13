'use client'
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="font-bold text-white">pages</h1>

      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </button>
      <p className="text-white">You clicked {count} times</p>
    </div>
  );
}

