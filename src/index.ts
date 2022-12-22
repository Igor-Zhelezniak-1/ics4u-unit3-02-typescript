/**
 * This is programm
 *
 * By: Igor
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

//process
function factorial(someInt: number): number {
  let returnInt
  if (someInt === 0) {
    returnInt = 1
  } else if (someInt < 0) {
    returnInt = -1
  } else {
    returnInt = factorial(someInt - 1) * someInt
  }
  return returnInt
}

// input
const userNum = prompt('Enter a number: ')
try {
  const userInt = parseInt(userNum)
  if (isNaN(userInt)) {
    console.log('Invalid Input')
  } else {
    console.log(`${userInt}! = ${factorial(userInt)}`)
  }
} catch (e) {
  console.log('ERROR:')
}

console.log('\nDone.')
