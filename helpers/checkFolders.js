import fs from "fs/promises";

function isAccessible(path) {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
}
async function setupFolder(path) {
  if (!(await isAccessible(path))) {
    await fs.mkdir(path);
  }
}

export { isAccessible, setupFolder };
