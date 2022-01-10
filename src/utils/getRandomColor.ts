export const getRandomColor = (): string =>
  'hsl(' + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + '70%)';
