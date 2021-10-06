const fs = require('fs');
const path = require('path');
const getToken = (req) => {
  return req.header("Authorization").replace("Bearer ", "");
}

const getImages = async () => {
  const imagesPath = path.join(__dirname, 'public');

  return fs.readdirSync(imagesPath, async (err, files) => {
    if (err) {
      return console.error(err);
    }
    return files;
  });
}

module.exports = {
  getToken,
  getImages
}
