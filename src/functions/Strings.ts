export const capitalize = (str: string) =>
  str
    .split(' ')
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
