import prisma from '@/lib/prisma';
import Link from 'next/link';

const Page = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <Link
        href="/todos/create"
        className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
      >
        新規追加
      </Link>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-2">
            <span>{todo.name}</span>
            <Link href={`/todos/${todo.id}`}>詳細</Link>
            <Link href={`/todos/${todo.id}/edit`}>更新</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
