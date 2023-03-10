import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mobiles from "./components/categories/Mobiles";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Electronics from "./components/categories/Electronics";
import MensFashion from "./components/categories/MensFashion";
import HomeAppliences from "./components/categories/HomeAppliences";
import Grocery from './components/categories/Grocery';
import HealthCare from "./components/categories/HealthCare";
import AutoMotive from "./components/categories/AutoMotive";
import WomensFashion from './components/categories/WomensFashion'
import LogIn from "./components/LogIn";
import Register from './components/Register'
import PlaceOrder from './pages/PlaceOrder'
import PrivateRouters from './components/PrivateRouters'
function App() {
  const dispatch = useDispatch();
  /*   const products = useSelector(state => state.product);
  console.log(products); */
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      const products = await res.data.products;
      dispatch({
        type: "SET_PRODUCTS",
        payload: products,
      });
    }
    getData();
  });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRouters/>}>
          
          <Route path="/placeorder" element={<PlaceOrder/>}/>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobiles />}/>
        <Route path="/electronics" element={<Electronics />}/>
        <Route path="/men'sfashion" element={<MensFashion />}/>
        <Route path="/women'sfashion" element={<WomensFashion />}/>
        <Route path="/healthcare" element={<HealthCare />}/>
        <Route path="/homeappliences" element={<HomeAppliences />}/>
        <Route path="/grocery" element={<Grocery />}/>
        <Route path="/automotive" element={<AutoMotive />}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element ={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
