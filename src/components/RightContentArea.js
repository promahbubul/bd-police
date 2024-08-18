import "./RightContentArea.css";
import { importantLinkRightData } from "../importantLinkData";


const RightContentArea = () => {
  return (
    <div className="right-area">
      {importantLinkRightData.map((value) => (
        <a href="#" className="important-link-item">
          <div className="image-div">
            <img src={value.img} alt="" className="" />
          </div>
          <p className="">{value.title}</p>
        </a>
      ))}
    </div>
  );
};

export default RightContentArea;
