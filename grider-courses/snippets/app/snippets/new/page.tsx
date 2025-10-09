import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action
    "use server";

    // console.log("createSnippet running. window is", typeof window); // should be 'undefined'
    // console.log("db is", typeof db);
    // console.log("db keys:", Object.keys(db ?? {})); // will show available methods / delegates
    //check the user's inputs and make sure they re valid
    const title = String(formData.get("title") ?? "").trim();
    const code = String(formData.get("code") ?? "").trim();
    // create a new record in the db
    try {
      const snippet = await db.snippet.create({
        data: { title, code },
      });
      // redirect the user back to the root route
      console.log("created snippet", snippet);
      redirect("/");
    } catch (err) {
      console.error("createSnippet error:", err);
      throw err;
    }
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
