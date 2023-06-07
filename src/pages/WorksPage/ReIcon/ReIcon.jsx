import images from "../../../assets/images";
import "./index.css";

const calculatePosition = (initialIndex, totalProyects) => {
  const result = (100 / totalProyects) * (initialIndex - 1);
  return `calc(${result}% + 20px)`;
};

const ReIcon = ({ iconName, initialIndex, totalProyects }) => {
  const left =
    initialIndex == 1
      ? "-20px"
      : calculatePosition(initialIndex, totalProyects);

  return (
    <span className="re__icon_container flex__center" style={{ left }}>
      <img src={images[iconName].img} />
    </span>
  );
};

export default ReIcon;
