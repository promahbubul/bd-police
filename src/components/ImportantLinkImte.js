import "./ImportantLinkItem.css";

const ImportantLinkItem = ({ title, logo }) => {
  return (
    <a href="#" className="important-link-item">
      <div className="image-div">
        <img src={logo} alt="" className="" />
      </div>
      <p className="">{title}</p>
    </a>
  );
};

export default ImportantLinkItem;
