import "./PlanetStats.css";
import { PlanetSummaryData } from "../../Data/planetSummary";

const PlanetStats = () => {
  return (
    <div className="planet-stats-container">
      {PlanetSummaryData.map((planet) => {
        return (
          <>
            <div className="planet-stat">
              <p className="planet-stat-title">Rotation Time</p>
              <p className="planet-stat-measurement">{planet.rotationTime}</p>
            </div>
            <div className="planet-stat">
              <p className="planet-stat-title">Revolution Time</p>
              <p className="planet-stat-measurement">{planet.revolutionTime}</p>
            </div>
            <div className="planet-stat">
              <p className="planet-stat-title">Radius</p>
              <p className="planet-stat-measurement">{planet.radius}</p>
            </div>
            <div className="planet-stat">
              <p className="planet-stat-title">Average Temp.</p>
              <p className="planet-stat-measurement">
                {planet.averageTemperature}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PlanetStats;
