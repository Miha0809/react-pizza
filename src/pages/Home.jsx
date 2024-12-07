import React from "react";
import { useEffect, useState } from "react";

import { Categories } from "../components/Categories/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Sort } from "../components/Sort/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярності (DESC)",
    sortBy: "rating",
    order: "desc"
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://674f6a8dbb559617b26f1bc1.mockapi.io/pizzas?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortBy}&order=${sortType.order}`
    )
      .then((item) => item.json())
      .then((json) => {
        setIsLoading(false);
        setPizzas(json);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  console.log(sortType);

  return (
    <div className="container">
      <div className="content__top">
        <Categories index={categoryId} onClick={setCategoryId} />
        <Sort type={sortType} onChangeSort={setSortType} />
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
    </div>
  );
};
