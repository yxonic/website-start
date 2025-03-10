import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about"!</div>;
}
