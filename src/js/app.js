export default function orderByProps(obj, keysArr) {
  const keysObj = Object.keys(obj);

  const filterArr = keysObj.filter((key) => !keysArr.includes(key)).sort();
  const resArr = keysArr.concat(filterArr);

  return resArr.map((key) => ({
    key, value: obj[key],
  }));
}
