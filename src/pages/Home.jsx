import React from "react";
import { useEffect, useState } from "react";

import { Categories } from "../components/Categories/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Sort } from "../components/Sort/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://674f6a8dbb559617b26f1bc1.mockapi.io/pizzas")
      .then((item) => item.json())
      .then((json) => {
        setIsLoading(false);
        setPizzas(json);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => (
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
    </>
  );
};
