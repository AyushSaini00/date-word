"use strict";

import { MONTHS } from "./constants.js";

function splitDate(text) {
  const splitted = text.split(" ");

  const [day, month, year] = [
    splitted[0],
    splitted[1].toLowerCase(),
    splitted[2],
  ];
  return [day, month, year];
}

function monthFromXLangToYLang(month, XLang, YLang) {
  const Xindex = MONTHS[XLang].months.indexOf(month);
  return MONTHS[YLang].months[Xindex];
}

export default function dateWord(text, options) {
  options = {
    to: "en",
    ...options,
  };

  try {
    if (!options.is) {
      return "invalid option";
    }

    let [day, month, year] = splitDate(text);

    month = monthFromXLangToYLang(month, options.is, options.to);
    return new Date(`${day} ${month} ${year}`);
  } catch (error) {
    // console.log(error)
    return "invalid date";
  }
}
