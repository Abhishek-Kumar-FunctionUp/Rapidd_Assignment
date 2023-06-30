import Navbar from "./Component/Navbar/Navbar";
import style from "./App.module.css";
import Contact from "./Component/Section/Contact/Contact";
import Officia from "./Component/Section/Officia/Officia";
import Footer from "./Component/Section/Footer/Footer";

export default function App() {
  return (
    <div className={style.main}>
      <Navbar />
      <Contact />
      <Officia />
      <Footer />
    </div>
  );
}
