import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="container">
        <div className="left">
          <img
            src="https://www.police.gov.bd/storage/upload/logo/en.png"
            alt=""
            className=""
          />
        </div>
        <h1 className="middle">
          {" "}
          “ দক্ষ পুলিশ, সমৃদ্ধ দেশ, <br /> দুর্নীতিমুক্ত বাংলাদেশ ”
        </h1>
        <div className="right">
          <select name="" id="">
            <option value="english">English</option>
          </select>
          <img
            src="https://www.police.gov.bd/asset/images/999_logo_3.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
