import imageList from './imagesList.json';

export type ImageListObj = {
  "1f929-starstruck-1024px-01-06-1@2x": string;
  "alert-triangle": string;
  "arrowcircleright": string;
  "arrownarrowright": string;
  "astronaut": string;
  "cancel": string;
  "check-circle": string;
  "copy01": string;
  "credit-card-download": string;
  "credit-card-plus": string;
  "download01": string;
  "ellipse-3@2x": string;
  "emergency-home": string;
  "favicon.ico": string;
  "group-1": string;
  "Group-Google": string;
  "group11": string;
  "Group12": string;
  "icon": string;
  "image-11@2x": string;
  "image-12@2x": string;
  "image-13@2x": string;
  "image-1@2x": string;
  "image1@2x": string;
  "image2@2x": string;
  "image@2x": string;
  "logo192": string;
  "logo512": string;
  "money-fly": string;
  "more-vert": string;
  "new-releases": string;
  "Node-Vs-PHP": string;
  "profile": string;
  "profile2": string;
  "RectanglePayoneer": string;
  "schedule": string;
  "stripe": string;
  "themecolor-identitydefault-skin-tonedefault": string;
  "vector-414": string;
  "vector-4141": string;
  "visa-1-1": string;
  "wenlo-logo": string;
  "xclose": string;
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
