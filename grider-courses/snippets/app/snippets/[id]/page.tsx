import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: any) {
  console.log("props", props);

  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      Show a Snippet <br />
      {snippet.title}
    </div>
  );
}
