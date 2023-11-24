import { describe, it, expect, test, toBe, instanceOf } from "vitest";
import pb from "@components/PocketBase.js";
import Client from "pocketbase";

describe("PocketBase.js", () => {
  test("PocketBase instance is created", () => {
    expect(pb).instanceOf(Client);
  });
});
describe("PocketBase Account Actions", () => {
  test("User Login", async () => {
    const authData = await pb
      .collection("users")
      .authWithPassword(
        import.meta.env.VITE_WEB_EMAIL,
        import.meta.env.VITE_WEB_PASSWORD
      );
    expect(pb.authStore.isValid).toBe(true);
  });
  test("User Logout", async () => {
    pb.authStore.clear();
    expect(pb.authStore.isValid).toBe(false);
  });
});
