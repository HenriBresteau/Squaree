import Footer from "./Components/Footer/Footer";
import Growth from "./Components/Growth/Growth";
import Hero from "./Components/Hero/Hero";
import Integration from "./Components/Integration/Integration";
import Navbar from "./Components/Navbar/Navbar";
import Partners from "./Components/Partners/Partners";
import Productivity from "./Components/Productivity/Produtivity";
import Subscribe from "./Components/Subscribe/Subscribe";
import Users from "./Components/Users/Users";

const App = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Hero />
            <Partners />
            <Growth />
            <Productivity />
            <Integration />
            <Users />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default App;
