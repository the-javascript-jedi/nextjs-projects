import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
  console.log("props", props);
  const { id } = await props.params;
  console.log("id", id);
  const snippet = await db.snippet.findFirst({
    where: { id: Number(id) },
  });

  if (!snippet) {
    return notFound;
  }
  //   const id = parseInt(props.params.id);
  return <div>Editing snippet with title {snippet.title}</div>;
}
