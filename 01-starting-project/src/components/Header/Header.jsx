import img from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crutial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default () => {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
