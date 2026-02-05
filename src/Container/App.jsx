import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../Routes/AppRoutes";
import { CartProvider } from "../context/CartContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <AppRoutes/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
