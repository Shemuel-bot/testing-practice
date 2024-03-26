/* eslint-disable no-undef */
import {Capitalize , reverseString, calculator}from "./index";

test('capitalizes first letter', ()=>{
    expect(Capitalize('crunchy')).toBe('Crunchy');
})
test('capitalizes first letter', ()=>{
    expect(Capitalize('sniper')).toBe('Sniper');
})

test('reverses a string', ()=>{
    expect(reverseString('crunchy')).toBe('yhcnurc');
})

test('adds two number together', ()=>{
    expect(calculator.add(120, 96)).toBe(216);
})
test('subtracts two numbers', ()=>{
    expect(calculator.subtract(120, 96)).toBe(24);
})
test('divides two numbers', ()=>{
    expect(calculator.divide(120, 4)).toBe(30);
})
test('multiply two numbers together', ()=>{
    expect(calculator.multiply(120, 96)).toBe(11520);
})
