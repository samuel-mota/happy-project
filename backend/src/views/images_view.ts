import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.100.9:3333/uploads/${image.path}`,
      // check on Metro Bundler Expo on Browser
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
