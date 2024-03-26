/* eslint-disable no-undef */
import {Capitalize , reverseString, calculator, ceaserCipher}from "./index";

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

test('encrypts a string with the ceaser cipher', ()=>{
    expect(ceaserCipher(3, 'yo mama')).toBe('br pdpd');
})
test('encrypts a string with the ceaser cipher', ()=>{
    expect(ceaserCipher(5, 'TarantUla expErt')).toBe('yfwfsyzqf jcujwy');
})
test('encrypts a string with the ceaser cipher', ()=>{
    expect(ceaserCipher(-5, 'TarantUla expErt')).toBe('ovmviopgv zskzmo');
})
