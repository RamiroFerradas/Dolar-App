export function addDotsToNumber(number) {
  const str = number.toString();
  const regex = /(\d)(?=(\d{3})+$)/g;
  return str.replace(regex, "$1.");
}
