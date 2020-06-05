import { getEntityById, getEntities } from "../../lib/databaseUtils";

export default (req, res) => {
  const data = getEntities("posts");
  res.json(data);
};
