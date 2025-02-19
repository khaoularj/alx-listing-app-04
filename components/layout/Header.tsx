const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" />
          <nav>
            <ul className="flex gap-4">
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Rooms</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Mansions</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Countryside</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-700 hover:text-blue-500">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  