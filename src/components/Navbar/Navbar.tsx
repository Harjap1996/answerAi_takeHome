const Navbar = () => (
  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900">
    <h1 className="text-2xl font-bold text-white">⚡ Charging Station</h1>

    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search"
        className="bg-neutral-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
      <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-lime-500 transition">
        Edit Variables
      </button>
    </div>
  </div>
);

export default Navbar;
