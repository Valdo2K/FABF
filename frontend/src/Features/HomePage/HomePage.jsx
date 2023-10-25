import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Service from "../Service/Service";

export default function HomePage () {
    return (
        <>
          <Home/>
          <Service/>
          <About/>
          <Contact/>
        </>
    );
}