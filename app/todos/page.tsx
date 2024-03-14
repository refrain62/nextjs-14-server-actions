import prisma from '@/lib/prisma';
import Form from '@/components/Form';
import { revalidatePath } from 'next/cache';

const Page = async () => {
  const todos = await prisma.todo.findMany()

  const addTodo = async (data: FormData) => {
    'use server';
    // console.log('click');
    const name = data.get('name') as string;
    await prisma.todo.create({ data: { name }});
    // 即座に画面反映
    revalidatePath('/todos')
  }

  return (
    <div className="m-8">
      <h1 className="text-x1 font-bold">
        Todo一覧
      </h1>
      <ul className='m-8'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
      {/* useStateのフォーム */}
      <Form />

      {/* ServerActionsのフォーム */}
      <form
        className="flex items-center mt4"
        action={addTodo}
        >
        <label htmlFor='name'>Name:</label>
        <input
          type="text"
          name="name"
          className="border mx-2 p-1"
          />

        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
          >
            Add Todo(ServerActions)
          </button>
      </form>

    </div>
  )
}

export default Page