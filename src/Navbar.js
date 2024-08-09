import "./Navbar.css";
import { CiMail } from "react-icons/ci";

function Navbar() {
  return (
    <section className="navArea">
      <div className="container">
        {/* Nav */}
        <nav className="left">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About Us
          </a>
          <a href="#" className="">
            Human Rights
          </a>
          <a href="#" className="">
            BD in UN Missions
          </a>
          <a href="#" className="">
            Citizen Charter
          </a>
          <a href="#" className="">
            Sacrifice in Action
          </a>
          <a href="#" className="">
            IGPs
          </a>
          <a href="#" className="">
            NOC & Notice
          </a>
          <a href="#" className="">
            POHS
          </a>
          <a href="#" className="">
            Unit of PHQ
          </a>
          <a href="#" className="">
            Circular
          </a>
          <a href="#" className="">
            Contact
          </a>
        </nav>
        {/* right */}
        <div className="right">
          <CiMail className="icon" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
