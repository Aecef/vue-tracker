import pb from "@components/Pocketbase.js";

export async function logout() {
  const authData = await pb.collection("users").authRefresh();
  pb.authStore.clear();
}

export async function isLoggedIn() {
  const authData = await pb.collection("users").authRefresh();
  return pb.authStore.isValid();
}
