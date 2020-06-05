import fs from "fs";
import path from "path";

const jsonFilePath = path.resolve("./db.json");

console.log(jsonFilePath);

const defaultDatabase = {
  // Add more entity types here if you need them
  posts: [
    {
      id: 1,
      artist: "David Bowie",
      song: "Fame",
    },
  ],
};

const saveToDb = (newDbState) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(newDbState, null, 2));
};

if (!fs.existsSync(jsonFilePath)) {
  saveToDb(defaultDatabase);
}

const getDb = () => {
  return JSON.parse(fs.readFileSync(jsonFilePath).toString());
};

export const createEntity = (entityType, entity) => {
  const db = getDb();
  if (!db[entityType]) {
    db[entityType] = [];
  }
  db[entityType].push(entity);
  saveToDb(db);
  return entity;
};

export const updateEntity = (entityType, entityId, newEntity) => {
  const db = getDb();
  const entityIndexToEdit = db[entityType].findIndex(
    (entity) => entity.id === entityId
  );
  const entityToEdit = db[entityType][entityIndexToEdit];
  const updatedEntity = { ...entityToEdit, ...newEntity };
  db[entityType][entityIndexToEdit] = updatedEntity;

  saveToDb(db);
  return updatedEntity;
};

export const deleteEntityById = (entityType, entityId) => {
  const db = getDb();
  db[entityType] = db[entityType].filter((entity) => entity.id !== entityId);
  saveToDb(db);
};

export const getEntities = (entityType) => {
  const db = getDb();
  return db[entityType] || [];
};

export const getEntityById = (entityType, entityId) => {
  const db = getDb();
  return db[entityType].find((entity) => entity.id == entityId);
};
