import "./Important.css";
import ImportantLinkItem from "./ImportantLinkImte";
import { importantLinkLeftData } from "../importantLinkData";

const Important = () => {
  return (
    <div className="important-area">
      {/* Important Link */}
      <div className="important-links">
        {importantLinkLeftData.map((item) => (
          <ImportantLinkItem key={item.id} logo={item.img} title={item.title} />
        ))}
      </div>
      {/* Notice Bord */}
      <div className="notice-board">Notice Board</div>
    </div>
  );
};

export default Important;
