'use strict'

exports.hrtime2ns = function (time) {
  return time[0] * 1e9 + time[1]
}

exports.hrtime2us = function (time) {
  return time[0] * 1e6 + time[1] / 1e3
}

exports.hrtime2ms = function (time) {
  return time[0] * 1e3 + time[1] / 1e6
}

exports.hrtime2s = function (time) {
  return time[0] + time[1] / 1e9
}
