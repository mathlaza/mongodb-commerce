// Remova o item cebola de todos os sanduíches

// 1. Crie uma query que faça a remoção do item cebola em todos os sanduíches.
db.produtos.updateMany(
  { ingredientes: { $elemMatch: { $eq: "cebola" } } },
  { $pull: { ingredientes: "cebola" } },
);

// 2. Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
