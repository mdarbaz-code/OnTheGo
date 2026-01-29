import ImagePage from "../Components/Pages/ImagePage";
import TypographyPage from "../Components/Pages/TypographyPage";


import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../Routes/AppRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}
