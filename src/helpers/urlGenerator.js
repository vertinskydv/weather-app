import { cityMainUrl, weatherApiKey } from '../config/config.json';

export default function getCityUrl(city) {
  return `${cityMainUrl}?APPID=${weatherApiKey}&q=${city}&units=metric`;
}
