import { Link } from "react-router-dom";
import { useState } from "react";

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Navbar() {
  const [isMoon, setIsMoon] = useState(true);

  const toggleIcon = () => {
    setIsMoon(!isMoon);
  };
  return (
    <>
      <div
        className={`flex flex-col  ${
          isMoon
            ? "bg-gray-100 transition bg-opacity-0 duration-200"
            : "bg-zinc-900 transition bg-opacity-100 duration-200"
        }`}
      >
        <header
          className={`my-3 mx-2 ${
            isMoon
              ? "text-slate-200 bg-zinc-900 transition duration-200"
              : "bg-gray-100 text-zinc-800 transition duration-200"
          } rounded-xl md:w-500`}
        >
          <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
            <Link to="/" className="text-2xl font-bold hover:text-slate-400 transition-colors">
              BootCamp News
            </Link>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center max-w-md">
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <div className="flex items-center justify-end gap-10 space-x-3">
                  <div
                    onClick={toggleIcon}
                    className="cursor-pointer duration-300 hover:scale-125 transition"
                  >
                    {isMoon ? (
                      <MoonIcon className="h-5 w-5 opacity-80" />
                    ) : (
                      <SunIcon className="h-5 w-5 opacity-80" />
                    )}
                  </div>
                  <Link to="/search" className="text-lg font-semibold">
                      <SearchIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition" />
                  </Link>
                  <MenuIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;