import { keyBy } from 'lodash';

export default function formatToComparisonTable(data) {
  const weathers = Object.values(data);
  const formattedData = {};
  weathers.forEach((weather) => {
    formattedData[weather.city.name] = keyBy(weather.list, 'dt');
  });
  return formattedData;
}
