function SearchBar({ placeholder = 'Search news...' }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="border rounded p-2 shadow focus:outline-none focus:border-black"
        />
    );
}

export default SearchBar;