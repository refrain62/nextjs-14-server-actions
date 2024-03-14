'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addTodo } from '@/lib/actions'

const Form = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    setName('');
    router.push('/todos');
  }

  return (
    <form
      className='flex items-center mt-4'
      action={addTodo}
      >
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        className='border mx-2 p-1'
        />

      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded-sm text-white"
        >
          Add Todo
      </button>
    </form>
  );
};

export default Form;
