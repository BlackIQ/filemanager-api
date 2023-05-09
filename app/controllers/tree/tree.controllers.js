import directoryTree from "directory-tree";
import env from "$app/env/index.js";

export const TREE = async (req, res) => {
  const { path } = req.body;

  const tree = directoryTree(path, {
    attributes: ["type"],
    depth: 1,
  });

  tree.children.sort((a, b) => {
    if (a.type === "directory" && b.type !== "directory") {
      return -1;
    } else if (a.type !== "directory" && b.type === "directory") {
      return 1;
    } else {
      if (a.name.startsWith(".") && !b.name.startsWith(".")) {
        return 1;
      } else if (!a.name.startsWith(".") && b.name.startsWith(".")) {
        return -1;
      } else {
        return a.name.localeCompare(b.name);
      }
    }
  });

  tree.home = env["HOME"];

  res.status(200).send(tree);
};
