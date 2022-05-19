const reports = require('./data/reports');
const images = require('./data/images');

const getImages = async () => {
  return images;
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
