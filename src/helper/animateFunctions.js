export const animateBlock = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 1.5 + delay,
    },
  };
};

export const animateProp = (delay, isInView) => {
  return {
    transform: isInView ? "none" : "skew(30deg) translateY(50px)",
    transition:
      "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1)" + " " + delay + "s",
    opacity: isInView ? 1 : 0,
  };
};

export const animateLetter = (controls, setIsStart) => {
  controls.start({
    color: ["#fa9427", "#b70000ff", "#e7e600ff", "#fff"],
    transform: [
      "scale3d(1, 1, 1)",
      "scale3d(1.4, .55, 1)",
      "scale3d(.75, 1.25, 1)",
      "scale3d(1.25, .85, 1)",
      "scale3d(.9, 1.05, 1)",
      "scale3d(1, 1, 1)",
    ],
  });
  setIsStart(true);
};