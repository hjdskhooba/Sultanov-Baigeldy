import Links from "../Links";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-full">
      <ul className="items-center w-fit max-w-fit justify-between hidden lg:flex gap-[26px]">
        <Links />
      </ul>
    </nav>
  );
};

export default Navbar;
