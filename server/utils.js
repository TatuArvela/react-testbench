const fs = require('fs');
const path = require('path');
const reports = require('./data/reports');

const getImages = async () => {
  const imagesPath = path.join(__dirname, 'public');

  return fs.readdirSync(imagesPath, async (err, files) => {
    if (err) {
      return console.error(err);
    }
    return files;
  });
}

const getReport = async (username) => {
  return reports[username];
}

const getToken = (req) => {
  return req.header("Authorization").replace("Bearer ", "");
}

module.exports = {
  getImages,
  getReport,
  getToken,
}
