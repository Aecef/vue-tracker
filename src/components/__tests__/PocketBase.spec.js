import { describe, it, expect, test, toBe, instanceOf } from "vitest";
import { mount } from "@vue/test-utils";
import pb from "@components/PocketBase.js";
import PocketBase from "pocketbase";
import Client from "pocketbase";

describe("PocketBase.js", () => {
  test("PocketBase instance is created", () => {
    expect(pb).instanceOf(Client);
  });
});
