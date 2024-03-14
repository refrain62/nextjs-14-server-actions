import prisma from '@/lib/prisma';
import Form from '@/components/Form';
import DeleteButton from '@/components/delete-button';
import { addTodo, addTodo2, deleteTodo } from '@/lib/actions'
import { Imprima } from 'next/font/google';

const Page = async () => {
  const todos = await prisma.todo.findMany()

  return (
    <div className="m-8">
      <h1 className="text-x1 font-bold">
        Todo一覧
      </h1>
      <ul className='mt-8'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            {/** 削除フォーム */}
            <DeleteButton id={todo.id}
            />
          </li>
        ))}
      </ul>
      {/* useStateのフォーム */}
      <Form />

      {/* ServerActionsのフォーム */}
      <form
        className="flex items-center mt4"
        action={addTodo2}
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