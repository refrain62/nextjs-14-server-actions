export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo詳細</h1>
      <div>Todo ID: {params.id}</div>
    </div>
  );
}