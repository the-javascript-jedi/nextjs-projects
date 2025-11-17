"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  console.log("id,code", id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // this needs to be a server action
  // console.log("createSnippet running. window is", typeof window); // should be 'undefined'
  // console.log("db is", typeof db);
  // console.log("db keys:", Object.keys(db ?? {})); // will show available methods / delegates
  //check the user's inputs and make sure they re valid
  const title = String(formData.get("title") ?? "").trim();
  const code = String(formData.get("code") ?? "").trim();

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be longer",
    };
  }
  if (typeof code !== "string" || code.length < 3) {
    return {
      message: "code must be longer",
    };
  }
  // create a new record in the db
  try {
    //temp commenting start
    // const snippet = await db.snippet.create({
    //   data: { title, code },
    // });
    // redirect the user back to the root route
    // console.log("created snippet", snippet);
    //temp commenting end

    // throw new Error("Oops!!!Failed to save to database!!");
    redirect("/");
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  }
}
