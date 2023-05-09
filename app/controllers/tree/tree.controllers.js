import directoryTree from "directory-tree";

export const TREE = async (req, res) => {
  const { path } = req.body;

  const tree = directoryTree(path);

  res.status(200).send(tree);
};
