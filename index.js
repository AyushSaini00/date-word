"use strict";

import { MONTHS } from "./constants";

function splitDate(text) {
  const splitted = text.split(" ");
  const [day, month, year] = [
    splitted[0],
    splitDate[1].toLowerCase(),
    splitted[2],
  ];
  return [day, month, year];
}

function monthFromXLangToYLang(month, XLang, YLang) {
  // de, en
  MONTHS.filter((mon) => mon.code === XLang && mon.months.includes(month));
}

export default function dateWord(text, options) {
  options = {
    convertFrom: ge,
    convertTo: en,
    ...options,
  };

  if (options.is) {
    options.convertFrom = options.is;
  }

  if (options.to) {
    options.convertTo = options.to;
  }

  const [day, month, year] = splitDate(text);
}

/* 
 dateWord('18. Dezember 2021', {
     is: de,
     to: en
 })
*/
