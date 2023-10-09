import { Route,Routes} from "react-router";
import Home from "./components/Home";
import Menus from "./components/Menus"
import Commande from "./components/Commande"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Menu from "./components/menu";
import Merci from "./components/Merci";
import Reservation from "./components/Reservation";

function App() {
  return (
    <>
    <Nav></Nav>
    <Routes>

      <Route path='/SummerSea/' element={<Home/>} />
      <Route path='/SummerSea/Home/' element={<Home/>} />
      <Route path='/SummerSea/Menus/*' element={<Menus/>} />
      <Route path='/SummerSea/Commande/' element={<Commande/>} />
      <Route path='/SummerSea/Merci/' element={<Merci/>} />
      <Route path='/SummerSea/Reservation/' element={<Reservation/>} />
    </Routes>
    <Footer></Footer>
    </>
   
    
  );
}
export default App