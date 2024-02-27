import fs from "fs/promises";

const isAccessible = (path) => {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
};

const setupFolder = async (path) => {
  const folder = isAccessible(path);
  if (!folder) {
    fs.mkdir(path);
  }
};

export { isAccessible, setupFolder };
