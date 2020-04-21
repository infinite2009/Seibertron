export const convertCamelCaseToDash = (src: string = '') => {
  return src.replace(/([a-z0-9])([A-Z])/, match => {
    return match;
  });
};

/*
 * 从数据源中导出 ref 指定的变量;
 * 例如 dataSource = {
 *  a: { b: [1, 2, 3] },
 * };
 * ref = 'a.b[0]'
 * 输出 dataSource.a.b[0]
 *
 * @param { dataSource any } 数据源
 * @param { ref String } 数据的 ref
 * @return any 导出的变量
 */
export const exportVariableFromRef = (dataSource: any, ref: string):any => {
  const type = /\[object (?<type>.+)]/.exec(Object.prototype.toString.call(dataSource)).groups.type;
  // TODO need implementation
  console.log(ref);
  switch (type) {
    case 'Object':
      break;
    case 'Array':
      break;
    case 'String':
      break;
    case 'Number':
      break;
    case 'Boolean':
      break;
    default:
      throw new Error(`Unsupported type: ${type},
       only types as followed are supported: Object, Array, String, Number, Boolean`);
  }
}
