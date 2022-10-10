import "./Navbar.css";
import { planetLinks } from "../../Data/planetLinks";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <h1 className="heading">The Planets</h1>
      <div className="planet-links">
        {planetLinks.map((planet) => {
          return (
            <h2 className="planet-link" key={planet}>
              {planet}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
