import { createFileRoute } from "@tanstack/react-router";
import Tiptap from "@/components/editor/Tiptap";

export const Route = createFileRoute("/(app)/")({
  component: Home,
});

function Home() {
  return (
    <div className="post py-12 px-48">
      <Tiptap />
    </div>
  );
}
