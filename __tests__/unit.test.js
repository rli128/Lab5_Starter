// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber Test Cases
test('empty input as false phone number', () => {
  expect(isPhoneNumber()).toBe(false);
});

test('short digit as false phone number', () => {
  expect(isPhoneNumber("6262")).toBe(false);
});

test('valid 10-digit should return true phone number', () => {
  expect(isPhoneNumber("(626)215-9282")).toBe(true);
});

test('valid 10-digit should return true phone number', () => {
  expect(isPhoneNumber("(100)000-0000")).toBe(true);
});

//isEmail tests

test('empty input as false email', () => {
  expect(isEmail()).toBe(false);
});

test('one word string as false email', () => {
  expect(isEmail("hello")).toBe(false);
});

test('valid address should return true email', () => {
  expect(isEmail("rickyli555@gmail.com")).toBe(true);
});

test('valid address should return true email', () => {
  expect(isEmail("rili@ucsd.edu")).toBe(true);
});

//isStrongPassword tests

test('short input as false strong password', () => {
  expect(isStrongPassword("sop")).toBe(false);
});

test('short word string as false strong password', () => {
  expect(isStrongPassword("pas")).toBe(false);
});

test('valid password should return true strong password', () => {
  expect(isStrongPassword("heythere24")).toBe(true);
});

test('valid password should return true strong password', () => {
  expect(isStrongPassword("ReallyStRong36")).toBe(true);
});

//isDate tests

test('empty input as false valid date', () => {
  expect(isDate()).toBe(false);
});

test('one word string as false valid date', () => {
  expect(isDate("pass")).toBe(false);
});

test('valid date should return true valid date', () => {
  expect(isDate("8/3/2003")).toBe(true);
});

test('valid date should return true valid date', () => {
  expect(isDate("5/7/2024")).toBe(true);
});

//isHexColor tests

test('empty input as false Hex Color', () => {
  expect(isHexColor()).toBe(false);
});

test('one word string as false Hex Color', () => {
  expect(isHexColor("pass")).toBe(false);
});

test('valid hex should return true Hex Color', () => {
  expect(isHexColor("#000000")).toBe(true);
});

test('valid hex should return true Hex Color', () => {
  expect(isHexColor("#111111")).toBe(true);
});