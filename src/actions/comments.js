"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function saveComment({ postId, parentCommentId }, formData) {
  const session = await auth();
  let errorMessage = "";
  try {
    if (!session.user) {
      errorMessage = "You can not post a reply when you are not logged in";
      throw new console.error(errorMessage);
    }
    await db.query("INSERT INTO comments (user_id, post_id, parent_comment_id, body) VALUES ($1, $2, $3, $4)", [
      session.user.id,
      postId,
      parentCommentId,
      formData.get("comment"),
    ]);

    revalidatePath(`/post/${postId}`);
    return { success: true };
  } catch {
    return { success: false };
  }
}
