const readExcelFile = require('read-excel-file/node');
const Result = require('../models/Result');

function processExcelFile(filePath) {
  const schema = {
    'Serial Number': { prop: 'serialNumber', type: Number },
    'Rank': { prop: 'rank', type: Number },
    // Add other fields based on your Excel structure and model
  };

  return readExcelFile(filePath, { schema }).then(({ rows }) => {
    return Result.insertMany(rows);
  });
}

module.exports = processExcelFile;
