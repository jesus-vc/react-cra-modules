const choice = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const remove = (items, item) => {
  const indextoRemove = items.indexOf(item);

  console.log("items1");

  console.log(items);
  if (indextoRemove !== -1) {
    items.splice(indextoRemove, 1);
    return items;
  } else {
    return undefined;
  }
};

export { remove, choice };
