const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.</p>
        <p>Follow us on <a href="#" className="text-blue-400">Twitter</a>, <a href="#" className="text-blue-400">Facebook</a>, and <a href="#" className="text-blue-400">Instagram</a>.</p>
      </footer>
    );
  };
  
  export default Footer;
  