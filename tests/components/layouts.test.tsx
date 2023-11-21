/// <reference lib="dom" />

import { expect, test } from 'bun:test'
import { SmallLayout, MediumLayout, LargeLayout } from '@nurl/ganglion'

test('SmallLayout', () => {
  expect(SmallLayout).toBeDefined()
})

test('MediumLayout', () => {
  expect(MediumLayout).toBeDefined()
})

test('LargeLayout', () => {
  expect(LargeLayout).toBeDefined()
})
