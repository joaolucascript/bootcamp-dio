import { Provider } from "react-redux";
import store from "./components/store";
import Layout from "./components/layout";

const App = () => {
  const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));

  if (localCart !== null) {
    store.dispatch({ type: "CHANGE_CART", localCart });
  }

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
