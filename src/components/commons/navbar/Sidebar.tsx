import { useEffect, useRef } from "react";
import { useSidebarStore } from "../../../store/store";
import "./index.css";

interface MenuItem {
  title: string;
  link: string;
}

const Sidebar: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeMenu = useSidebarStore((state) => state.closeMenu);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <nav className={`offcanvas ${isOpen ? "active" : ""}`} ref={sidebarRef}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a
              href={menuItem.link}
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}>
              {menuItem.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
