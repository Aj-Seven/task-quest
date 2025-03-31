import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gray-300 p-2 backdrop-blur-sm transition-all">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-2xl">Task Quest</span>
      </div>
      <div className="flex items-center space-x-3">
        {/* GitHub Link */}
        <a
          href="https://github.com/Aj-Seven/task-quest"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-gray-400"
        >
          <Github className="h-6 w-6 " />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
