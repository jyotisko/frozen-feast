export const items = {
  bookmarks: []
};

const contains = (arr, el) => {
  if (!arr) return;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == el) {
      arr.splice(i, 1);
      return true;
    };
  } return false;
};

export const addItemToLocalStorage = (name, price, img) => {
  if (contains(items.bookmarks, name)) return localStorage.setItem('items', JSON.stringify(items.bookmarks));
  items.bookmarks.push({
    name: name,
    price: price,
    imgSrc: img
  });
  localStorage.setItem('items', JSON.stringify(items.bookmarks));
};

export const getDataFromLocalStorage = () => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
  if (!itemsFromLocalStorage) return items.bookmarks = [];
  items.bookmarks = itemsFromLocalStorage;
};


