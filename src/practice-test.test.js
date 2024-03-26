/* eslint-disable no-undef */
import {Capitalize , reverseString}from "./index";

test('capitalizes first letter', ()=>{
    expect(Capitalize('crunchy')).toBe('Crunchy');
})
test('capitalizes first letter', ()=>{
    expect(Capitalize('sniper')).toBe('Sniper');
})

test('reverses a string', ()=>{
    expect(reverseString('crunchy')).toBe('yhcnurc');
})


