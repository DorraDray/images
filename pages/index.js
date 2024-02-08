import { sql } from "@vercel/postgres";
import ImageForm from "@/components/ImageForm";
// import { DeleteForm } from "@/app/delete-form";

export default async function Home() {
  // let images = await sql`SELECT * FROM images`;

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      {/* <ImageForm /> */}
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul> */}
    </main>
  );
}
