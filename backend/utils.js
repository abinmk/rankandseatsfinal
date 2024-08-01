// utils.js
const batchInsert = async (Model, data, batchSize = 1000) => {
    const batches = [];
    for (let i = 0; i < data.length; i += batchSize) {
      batches.push(data.slice(i, i + batchSize));
    }
    for (const batch of batches) {
      await Model.insertMany(batch, { ordered: false });
    }
  };
  
  module.exports = { batchInsert };
  