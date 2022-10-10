import { PlanetButtonInfo } from "../../Data/planetButton";
import "./InfoButton.css";

const InfoButton = () => {
  return PlanetButtonInfo.map((button) => {
    return (
      <div className="button-number-container" key={button.number}>
        <p className="button-number">{button.number}</p>
        <p className="button-label">{button.label}</p>
      </div>
    );
  });
};

export default InfoButton;
