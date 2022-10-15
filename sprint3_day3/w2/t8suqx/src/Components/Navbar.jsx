import { Link, NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About"
  },
  {
    to: "/contact",
    title: "Contact"
  },
  {
    to: "/users",
    title: "Users"
  },
  {
    to: "/login",
    title: "Login"
  }
];

// NavLinks
const baseStyle = {
  color: "black",
  textDecoration: "none"
};

const activeStyle = {
  color: "red",
  textDecoration: "none"
};

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {links.map((item) => (
        // activeStyle, or activeClass
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
