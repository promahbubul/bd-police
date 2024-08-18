import "./App.css";
import Banner from "./components/Banner";
import ContentArea from "./components/ContentArea";
import Navbar from "./components/Navbar";
import Carousel from "./components/Slider";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Banner />
      <Carousel />
      <ContentArea />
    </>
  );
}

export default App;
