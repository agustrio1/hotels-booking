import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebarStore } from "../../../store/store";
import Sidebar from "./Sidebar";
import "./index.css";

interface MenuItem {
  title: string;
  link: string;
}

const Navbar: React.FC = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleMenu = useSidebarStore((state) => state.toggleMenu);
  const closeMenu = useSidebarStore((state) => state.closeMenu);
  const menuItems: MenuItem[] = [
    { title: "Home", link: "/" },
    { title: "Booking", link: "/booking" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];  

  return (
    <>
      <header className="header">
        <h1>Navbar</h1>
        <div
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </div>
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link} onClick={closeMenu}>
                {menuItem.title}
              </a>
            </li>
          ))}
        </nav>
      </header>
      <Sidebar menuItems={menuItems} />
    </>
  );
};

export default Navbar;
