import prisma from '@/lib/prisma';
import Form from '@/components/Form';

const Page = async () => {
  const todos = await prisma.todo.findMany()

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
      <Form />
    </div>
  )
}

export default Page