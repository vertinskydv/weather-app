import { cityMainUrl, historyMainUrl, weatherApiKey } from '../config/config.json';

export function getCityUrl(city) {
  return `${cityMainUrl}?APPID=${weatherApiKey}&q=${city}&units=metric`;
}

export function getHistoryUrl(city, startDate) {
  return `${historyMainUrl}?APPID=${weatherApiKey}&q=${city}&start=${startDate}&cnt=24`;
}
