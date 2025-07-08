const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 p-3 md:p-9">
      <a href="#">
        <img
          src="/images/nav-logo.svg"
          alt="logo"
          className="w-20 md:w-24 cursor-pointer"
        />
      </a>
    </nav>
  );
};

export default Navbar;
