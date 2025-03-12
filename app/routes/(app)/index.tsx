import { createFileRoute } from "@tanstack/react-router";

import Tiptap from "@/components/editor/Tiptap";
import storage from "@/lib/storage";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

const getContent = createServerFn({
  method: "GET",
}).handler(async () => {
  return (await storage.getItem<string>("content")) ?? "<h1>Hello, World!</h1>";
});

const setContent = createServerFn({
  method: "POST",
})
  .validator((s: string) => s)
  .handler(async ctx => {
    await storage.setItem<string>("content", ctx.data);
  });

export const Route = createFileRoute("/(app)/")({
  component: Home,
  loader: () => getContent(),
});

function Home() {
  const content = Route.useLoaderData();
  const [loading, setLoading] = useState(true);
  return (
    <div className="post py-12 px-6 lg:px-48 ">
      {loading ? <div>loading...</div> : ""}
      <Tiptap
        content={content}
        setContent={s => setContent({ data: s })}
        setLoading={setLoading}
      />
    </div>
  );
}
