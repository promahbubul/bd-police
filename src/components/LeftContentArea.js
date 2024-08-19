import Important from "./Important";
import "./LeftContentArea.css";
import Services from "./Services/Services";

const LeftContentArea = () => {
  return (
    <div className="left-area">
      <Important />
      <Services />
    </div>
  );
};

export default LeftContentArea;
