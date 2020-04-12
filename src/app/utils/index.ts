export const convertCamelCaseToDash = (src: string = '') => {
  return src.replace(/([a-z0-9])([A-Z])/, match => {
    return match;
  });
};
