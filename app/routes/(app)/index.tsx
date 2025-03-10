import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "app/components/ui/button";
import logo from "@/assets/logo.svg";

export const Route = createFileRoute("/(app)/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>app/routes/index.tsx</code> and save to reload.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Button asChild>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://tanstack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn TanStack
            </a>
          </Button>
        </div>
        <Link to="/about" className="mt-8 underline">
          about
        </Link>
      </header>
    </div>
  );
}
