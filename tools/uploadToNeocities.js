var NeoCities = require("neocities");
var api = new NeoCities("super-stupid-stuff", process.env.NEO_PASS);
const fs = require("fs");

function getAllUploadPaths(baseDir) {
  const paths = fs.readdirSync(baseDir);
  const finalPaths = [];
  paths.forEach((path) => {
    const fullPath = baseDir + "/" + path;
    const type = fs.lstatSync(fullPath);
    if (type.isDirectory()) {
      const dirPaths = getAllUploadPaths(fullPath);
      finalPaths.push(...dirPaths);
    } else if (type.isFile()) finalPaths.push(fullPath);
  });
  return finalPaths;
}

const paths = getAllUploadPaths("__sapper__/export");
const uploadObj = paths.map((path) => {
  return { name: path.split('__sapper__/export/')[1].replace('[slug]', '\[slug\]'), path: "./" + path };
});

api.upload(uploadObj, (resp) => {
  console.log(resp);
});
