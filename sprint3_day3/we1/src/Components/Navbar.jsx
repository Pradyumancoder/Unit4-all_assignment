import { NavLink } from "react-router-dom";

const Links = [
  {
    to: "/",
    name: "Home"
  },
  {
    to: "/About",
    name: "About"
  },
  {
    to: "/Contact",
    name: "Contact"
  },
  {
    to: "/User",
    name: "User"
  },
  {
    to: "/login",
    name: "login"
  }
];

export const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {Links.map((links) => (
        <NavLink
          style={{ textDecoration: "none" }}
          key={links.to}
          to={links.to}>
          {links.name}
        </NavLink>
      ))}
    </div>
  );
};
