import { Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help</h1>
      <p>
        In this course app, we’re here to support you whenever you hit a bump.
        learning is easier when we grow together.
      </p>
      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">FAQ</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
