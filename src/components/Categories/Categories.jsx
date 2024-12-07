export const Categories = ({index, onClick}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={index === i ? "active" : ""}
            onClick={() => onClick(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
