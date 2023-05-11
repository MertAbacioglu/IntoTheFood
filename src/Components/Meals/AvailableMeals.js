import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const Dummy_Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 22.99,
  },
  //create 3 more
  {
    id: "m3",
    name: "Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Pizza",
    description: "Italian, cheesy, saucy",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Pasta",
    description: "Italian, cheesy, saucy",
    price: 18.99,
  },
  {
    id: "m6",
    name: "Pasta",
    description: "Italian, cheesy, saucy",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = Dummy_Meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card>
      <section>
        <ul>{mealsList}</ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
