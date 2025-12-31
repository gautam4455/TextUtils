// import { Link } from "react-router-dom";

interface INavbarProps {
  mode: string;
  title: string;
  toggleMode: () => void;
}

const Navbar = ({ mode, title, toggleMode }: INavbarProps) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <button className="navbar-brand bg-transparent border-0">
          {title}
        </button>

        {/* <Link className="navbar-brand" to="/">Navbar</Link> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#">
                Home
              </a> */}
              {/* <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">
                About
              </a> */}
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}
            </li>
          </ul>

          <div className="form-check form-switch" role="button">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={mode === "dark"}
              id="mode"
              onChange={toggleMode}
              style={{ cursor: "pointer" }}
            />

            <label
              className={`form-check-label text-${
                mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="mode"
              style={{ cursor: "pointer" }}
            >
              Enable {mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
