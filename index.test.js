const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect(input).toEqual( { foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
  })
  // test('[4] the object returned is the exact same one we passed in', () => {})
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const renamedMutant = utils.trimPropertiesMutation(input)
    expect(renamedMutant).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = [{ integer: 2 },{ integer: 5 },{ integer: 2 },{ integer: 2 }]
    const largestInteger = utils.findLargestInteger(input)
    expect(largestInteger).toBe(5)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const initialCountDown = counter.countDown()
    const expected = counter.currentCount
    expect(initialCountDown).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondCountDown = counter.countDown()
    const expected = 2
    expect(secondCountDown).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let finalCountDown 
    for (let i=0 ; i < 10 ;i++){ 
      finalCountDown = counter.countDown()
    }
    const expected = 0
    expect(finalCountDown).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const firstSeason = seasons.next()
    const expected = 'summer'
    expect(firstSeason).toBe(expected)
  })
  
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const secondSeason = seasons.next()
    const expected = 'fall'
    expect(secondSeason).toBe(expected)
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const thirdSeason = seasons.next()
    const expected = 'winter'
    expect(thirdSeason).toBe(expected)
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const fourthSeason = seasons.next()
    const expected = 'spring'
    expect(fourthSeason).toBe(expected)
  })

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let fifthSeason 
    for (let i=0 ; i < 5 ;i++){ 
      fifthSeason = seasons.next()
    }
    const expected = 'summer'
    expect(fifthSeason).toEqual(expected)
  })
  

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let fortiethSeason 
    for (let i=0 ; i < 40 ;i++){ 
      fortiethSeason = seasons.next()
    }
    const expected = 'spring'
    expect(fortiethSeason).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
