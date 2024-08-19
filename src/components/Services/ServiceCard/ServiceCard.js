import "./ServiceCard.css";
import { IoMdArrowDropright } from "react-icons/io";

const ServiceCard = ({ image, title, list }) => {
  console.log(list);
  return (
    <div className="service-card">
      <h3 className="">{title}</h3>
      <div className="service-content">
        {/* left */}
        <div className="service-content-left">
          <img src={image} alt="" className="" />
        </div>
        {/* right */}
        <div className="service-content-right">
          {/* item 1 */}
          {list.map((value) => (
            <div className="item">
              <IoMdArrowDropright />
              <a href="#" className="">
                {value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
