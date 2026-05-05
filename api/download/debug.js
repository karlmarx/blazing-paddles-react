const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const cwd = process.cwd();
  const filesDir = path.join(cwd, 'files');

  let files = [];
  let dirExists = false;

  try {
    dirExists = fs.existsSync(filesDir);
    if (dirExists) {
      files = fs.readdirSync(filesDir);
    }
  } catch (err) {
    return res.json({ error: err.message });
  }

  res.json({
    cwd,
    filesDir,
    dirExists,
    files,
  });
};