const o = {
  en: {
    language: "english",
    months: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ]
  },
  de: {
    language: "german",
    months: [
      "januar",
      "februar",
      "märz",
      "april",
      "mai",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "dezember"
    ]
  },
  es: {
    language: "spanish",
    months: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ]
  },
  fr: {
    language: "french",
    months: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ]
  },
  it: {
    language: "italian",
    months: [
      "gennaio",
      "febbraio",
      "marzo",
      "aprile",
      "maggio",
      "giugno",
      "luglio",
      "agosto",
      "settembre",
      "ottobre",
      "novembre",
      "dicembre"
    ]
  }
};
function m(n) {
  const e = n.split(" "), [a, r, t] = [
    e[0],
    e[1].toLowerCase(),
    e[2]
  ];
  return [a.replace(/\D/g, ""), r, t.replace(/\D/g, "")];
}
function i(n, e, a) {
  const r = o[e].months.indexOf(n);
  return o[a].months[r];
}
function u(n, e) {
  e = {
    to: "en",
    ...e
  };
  try {
    if (!e.is)
      return "invalid option";
    let [a, r, t] = m(n);
    return e.format === "isoString" ? (r = i(r, e.is, "en"), (/* @__PURE__ */ new Date(`${a} ${r} ${t}`)).toISOString()) : (r = i(r, e.is, e.to), `${a} ${r} ${t}`);
  } catch {
    return "invalid date";
  }
}
export {
  u as default
};
