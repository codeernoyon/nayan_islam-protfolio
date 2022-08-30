export const headerAnimation = {
  headerAnim: {
    start: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.2,
        delay: 0,
      },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: 0.5,
      },
    },
  },
};
