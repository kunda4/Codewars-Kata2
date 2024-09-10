/**
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

export function humanReadable(seconds:number):string {
    const hours = Math.floor(seconds/3600);
    const min = Math.floor((seconds%3600)/60);
    const sec = seconds%60;
     
    return [hours, min, sec].map((unit) => String(unit).padStart(2, '0')).join(":")
   }