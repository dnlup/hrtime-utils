# hrtime-utils

> A small collection of useful functions to work with Node.js [`process.hrtime`](https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_hrtime_time)  values.

`hrtime-utils` is a tiny module that exports a few useful functions that you can use to convert the value returned from `process.hrtime()` to a time unit.

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  * [hrtime2ns(time)](#hrtime2nstime)
  * [hrtime2ms(time)](#hrtime2mstime)
  * [hrtime2s(time)](#hrtime2stime)
- [Note](#note)

<!-- tocstop -->

## Installation

```bash
$ npm i @dnlup/hrtime-utils
````

## Usage

```js
const {
  hrtime2ns,
  hrtime2ms,
  hrtime2
} = require('@dnlup/hrtim-utils')

const time = process.hrtime()

hrtime2ns(time) // time in nanoseconds
hrtime2ms(time) // time in milliseconds
hrtime2s(time) // time in seconds

const delta = process.hrtime(time)

hrtime2ns(delta) // delta in nanoseconds
hrtime2ms(delta) // delta in milliseconds
hrtime2s(delta) // delta in seconds
```

## API

### hrtime2ns(time)

* `time` `<integer[]`> The return value of a [`process.hrtime()`](https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_hrtime_time) call

* Returns `<number>`

Converts `time` to nanoseconds.

### hrtime2ms(time)

* `time` `<integer[]`> The return value of a [`process.hrtime()`](https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_hrtime_time) call

* Returns `<number>`

Converts `time` to milliseconds.

### hrtime2s(time)

* `time` `<integer[]`> The return value of a [`process.hrtime()`](https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_hrtime_time) call

* Returns `<number>`

Converts `time` to seconds.

## Note

If your Node.js environment supoorts it, you could use [`process.hrtime.bigint()`](https://nodejs.org/docs/latest-v12.x/api/process.html#process_process_hrtime_bigint) instead of `process.hrtime()` and this module.
