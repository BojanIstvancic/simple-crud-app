const links = {
  home: {
    url: `/`,
    pattern: `/`,
  },
  create: {
    url: `/create`,
    pattern: `/create`,
  },
  itemDetails: (itemId?: string) => ({
    url: `/details/:id`,
    pattern: `/details/:${itemId}`,
  }),
};

export default links;
