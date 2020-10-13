'use strict'

const tap = require('tap')
const sleep = require('atomic-sleep')
const {
  hrtime2ns,
  hrtime2ms,
  hrtime2s
} = require('./')

tap.test('hrtime2ns', t => {
  const start = process.hrtime()
  sleep(205)
  const end = process.hrtime(start)
  const delta = hrtime2ns(end)
  t.ok(delta >= 2e6, `value ${delta}`)
  t.end()
})

tap.test('hrtime2ms', t => {
  const start = process.hrtime()
  sleep(205)
  const end = process.hrtime(start)
  const delta = hrtime2ms(end)
  t.ok(delta >= 2e2, `value ${delta}`)
  t.end()
})

tap.test('hrtime2s', t => {
  const start = process.hrtime()
  sleep(1050)
  const end = process.hrtime(start)
  const delta = hrtime2s(end)
  t.ok(delta >= 1, `value ${delta}`)
  t.end()
})
