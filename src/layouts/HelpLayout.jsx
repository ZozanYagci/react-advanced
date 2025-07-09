import { Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help Layout</h1>
      <p>
        In this course app, we’re here to support you whenever you hit a bump.
        learning is easier when we grow together.
      </p>
      <nav>
        <Link to="contact">Contact</Link>
        <Link to="faq">FAQ</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
