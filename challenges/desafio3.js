db.produtos.updateMany({ valorUnitario: { $exists: false },
}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany({ tags: "bovino",
}, { $set: { avaliacao: NumberInt(5) } });

db.produtos.updateMany({ tags: "ave",
}, { $set: { avaliacao: NumberInt(3) } });

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
