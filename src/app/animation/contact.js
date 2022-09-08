export const contactAnimation = {
  main: {
    start: {
      y: 200,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 1,
        delay: 0.5,
      },
    },
  },
  right: {
    start: {
      x: 100,
      opacity: 0,
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1,
        delay: 1.6,
      },
    },
  },
  left: {
    start: {
      x: -100,
      opacity: 0,
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1,
        delay: 1.3,
      },
    },
  },
};
