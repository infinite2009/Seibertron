export const convertCamelCaseToDash = (src: string = '') => {
  return src.replace(/([a-z0-9])([A-Z])/, match => {
    return match;
  });
};

/*
 * 获取数据的类型
 */
export const getTypeOf = (data: any) => {
  const typeStr = Object.prototype.toString.call(data);
  return typeStr.substring(8, typeStr.length - 1).toLowerCase();
}

