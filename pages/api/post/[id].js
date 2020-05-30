import { getEntityById } from "../../../lib/databaseUtils";

export default (req, res) => {
  const data = getEntityById("posts", req.query.id);
  if (!data) {
    res.status(404);
    res.send("Could not find post");
  } else {
    res.json(data);
  }
};
