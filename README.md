# date-word

Converts date from one language to another

## install

```
npm install date-word
```

## usage

```js
import dateWord from "date-word";

dateWord(`18. Dezember 2021`, {
  is: "de",
  to: "en",
});
// 18 december 2021

dateWord(`18 décembre 2021`, {
  is: "fr",
  to: "es",
});
// 18 diciembre 2021

dateWord(`18 décembre 2021`, {
  is: "fr",
  format: "isoString",
});
// 2021-12-17T18:30:00.000Z
```

### demo

- [vanilla javascript demo](https://stackblitz.com/edit/date-word-package-demo?file=index.js)

## api

- `dateWord(dateInput, options)`

### dateInput

Type: string

date to covert from one language to another

### options

Type: object
children types : string

#### is (required)

language code for the dateInput string

#### to

language code for the convert to date

#### format

date formats, defaults to none.

formats present as of now

- isoString
