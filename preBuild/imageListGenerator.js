const fs = require('fs');

const files = fs.readdirSync('./public/images');
let res = {};
let types = {};
files.forEach((file, index) => {
  let t = file;
  let v = file
    .replace('.png', '')
    .replace('.jpg', '')
    .replace('.jpeg', '')
    .replace('.svg', '');
  res[v] = "/images/"+t;
  types[v] = 'string';
});
fs.writeFileSync('./src/utils/imagesList.json', JSON.stringify(res));

let content = `import imageList from './imagesList.json';

export type ImageListObj = {
  ${Object.keys(types)
    .map(key => {
      return `"${key}": string;`;
    })
    .join('\n  ')}
}

class ImageService {
  images:ImageListObj
  constructor() {
    this.images = imageList;
  }
  getImages() {
    return this.images;
  }
}

const imageService = new ImageService();

export default imageService;
`;

fs.writeFileSync('./src/utils/ImageService.ts', content);

