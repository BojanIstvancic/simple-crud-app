const links = {
  home: {
    url: `/`,
    pattern: `/`,
  },
  create: {
    url: `/create`,
    pattern: `/create`,
  },
  itemDetails: (itemId?: number) => ({
    url: `/details/${itemId}`,
    pattern: `/details/:id`,
  }),
};

export default links;
