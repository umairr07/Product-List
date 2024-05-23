import { CartProvider } from "react-use-cart";
import Page from "./components/Page";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}

export default App;
