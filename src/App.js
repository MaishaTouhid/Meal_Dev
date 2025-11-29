import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Categories from "./Pages/Categories";
import Meals from "./Pages/Meals";
import MealDetail from "./Pages/MealDetail";

const Box = ({ children }) => <div style={{ padding: 20 }}>{children}</div>;

function Home() {
  const go = useNavigate();
  return (
    <Box>
      <h2> Meals Demo</h2>
      <button onClick={() => go("/categories")}>Go to Categories</button>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:name" element={<Meals />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
