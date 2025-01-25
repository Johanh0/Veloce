export const setLocalStorage = (storageName, storageContent) => {
  localStorage.setItem(storageName, JSON.stringify(storageContent));
};
