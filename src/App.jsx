import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import LineGraph from "./pages/LineChart/LineChart";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const navLink = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },

    {
      id: 2,
      title: "Line-Chart",
      href: "/line-chart",
    },

    {
      id: 3,
      title: "Products",
      href: "/products",
    },
  ];

  return (
    <>
      <Router>
        <Header navLink={navLink} />
        <main className="px-4 md:px-8 mt-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/line-chart" element={<LineGraph />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
