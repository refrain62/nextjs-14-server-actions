
'use server'
import { revalidatePath } from "next/cache";

export const addTodo = async (name: string) => {
  // console.log('click');
  await prisma.todo.create({ data: { name }});
  // 即座に画面反映
  revalidatePath('/todos')
}

export const addTodo2 = async (data: FormData) => {
  // console.log('click');
  const name = data.get('name') as string;
  await prisma.todo.create({ data: { name }});
  // 即座に画面反映
  revalidatePath('/todos')
}

export const deleteTodo = async (id: number) => {
  // console.log('delete');
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath('/todos');
}

export const deleteTodo2 = async (data: FormData) => {
  // console.log('delete');
  const id = data.get('id') as string;

  await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath('/todos');
}
