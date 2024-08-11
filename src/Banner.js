import "./Banner.css";
function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="left">
          <img
            src="https://www.police.gov.bd/storage/upload/poster/lBCgBZQO2pttAyv8Kgy3Lz7XvWKVreSsd02L67In.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="right">
          <img
            src="https://www.police.gov.bd/storage/upload/file/PSIAgoFSgkTWdSU2RAiia5SsEZRI0IrQ2zcVK63x.png"
            alt=""
          />
          <h5 className="">Md. Mainul Islam, ndc <br /> Inspector General</h5>
          <a href="#igpmessages" className="">
            Messages from IGP {">>"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
