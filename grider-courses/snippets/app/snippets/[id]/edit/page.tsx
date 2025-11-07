interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
  console.log("props", props);
  const { id } = await props.params;
  console.log("id", id);

  //   const id = parseInt(props.params.id);
  return <div>Editing snippet with id {id}</div>;
}
