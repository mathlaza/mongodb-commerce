// Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

// 1. Crie uma query que faça tanto a inserção dos valores combo e tasty no array tags de todos os sanduíches. Ordene os valores de tags em ordem alfabética ascendente.
db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);

// 2. Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
