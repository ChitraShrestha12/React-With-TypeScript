import ChaiList from "./Components/ChaiList";
import OrderForm from "./Components/OrderForm";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Chai Menu</h1>
      <p className="subheading">Freshly brewed, served hot ☕</p>

      <ChaiList />

      <OrderForm />
    </div>
  );
}

export default App;
