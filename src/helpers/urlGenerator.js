import { cityMainUrl, historyMainUrl, weatherApiKey } from "../config/config";
import moment from "moment";

export function getCityUrl(city) {
    return `${cityMainUrl}forecast?APPID=${weatherApiKey}&q=${city}&units=metric`
}

export function getHistoryUrl(city, startDate) {
    return `${cityMainUrl}forecast?APPID=${weatherApiKey}&q=${city}&units=metric`
}