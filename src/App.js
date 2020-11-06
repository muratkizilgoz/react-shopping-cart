import Cart from "./containers/Cart/Cart";
import Layout from "./hoc/Layout/Layout";
//import classes from "./App.module.scss";

function App() {
  return (
    <div>
      <Layout>
        <Cart></Cart>
      </Layout>
    </div>
  );
}

export default App;
