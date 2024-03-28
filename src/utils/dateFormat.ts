const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getShortDay = (isoDate?: string) => {
  const date = new Date(isoDate || '');

  return [
    `${date.getDate()} ${months[date.getMonth()]}`,
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
  ];
};

const getHour = (isotring: string) => {
  const date = new Date(isotring);
  return `${(date.getHours() % 12).toString().padStart(2, '0')} : ${date
    .getMinutes()
    .toFixed(0)
    .padStart(2, '0')} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
};

const getDate = (isoString: string) => new Date(isoString);

export { getShortDay, getDate, getHour };
