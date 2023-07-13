import images from "../../../assets/images";
import "./index.css";

const calculatePosition = (initialIndex, totalProyects) => {
  const result = Math.round((100 / totalProyects) * (initialIndex - 1));
  return `calc(${result}%)`;
};

const ReIcon = ({ iconName, initialIndex, totalProyects }) => {
  const left =
    initialIndex == 1
      ? "-15px"
      : calculatePosition(initialIndex, totalProyects);

  return (
    <span className="re__icon_container flex__center" style={{ left }}>
      <img src={images[iconName].img} />
    </span>
  );
};

export default ReIcon;
