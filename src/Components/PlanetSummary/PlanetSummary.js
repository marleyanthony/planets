import "./PlanetSummary.css";
import { PlanetSummaryData } from "../../Data/planetSummary";

const PlanetSummary = () => {
  return PlanetSummaryData.map((planet) => {
    return (
      <div className="planet-summary-container">
        <div className="planet-summary-img-container">
          <img
            className="planet-summary-main-img"
            src={planet.img.default}
            alt={`${planet.name}`}
          />
        </div>
        <div className="planet-summary-text-container">
          <h1 className="planet-summary-name">{planet.name}</h1>
          <p className="planet-summary-overview">{planet.overview}</p>
          <p className="planet-summary-source">
            Source:{" "}
            <a href={planet.overviewWiki} className="planet-summary-link">
              Wikipedia
            </a>
            <img
              className="planet-summary-link-icon"
              src={require("../../assets/icon-source.svg").default}
              alt="icon source"
            />
          </p>
        </div>
      </div>
    );
  });
};

export default PlanetSummary;
