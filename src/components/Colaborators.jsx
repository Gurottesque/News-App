export default function Colaborators({ colaborator }) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center w-full px-4 py-2 rounded-md text-sm font-medium  border-gray-50 rounded-t-lg hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      <svg
        className="w-3.5 h-3.5 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
      {colaborator}
    </button>
  );
}