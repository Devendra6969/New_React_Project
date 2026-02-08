import ModeToggle from "@/components/mode-toggle";


export default function Navbar() {
  return (
    <nav className="w-full border-b bg-horizon">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <h1 className="text-lg font-semibold">
          TODO-<span className="font-thin text-green-400">Be prodcutive</span>
        </h1>

        <ul className="flex gap-10 hover:cursor-pointer">
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
