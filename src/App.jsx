import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Categories/Categories";
import { PizzaBlock } from "./components/PizzaBlock/PizzaBlock";
import { Sort } from "./components/Sort/Sort";

import "./scss/app.scss";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://672935196d5fa4901b6c7b94.mockapi.io/pizzas")
      .then((item) => item.json())
      .then((json) => setPizzas(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                title={pizza.title}
                imageUrl={pizza.imageUrl}
                typeIndexs={pizza.types}
                sizes={pizza.sizes}
                price={pizza.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
