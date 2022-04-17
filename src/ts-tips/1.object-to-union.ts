export const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26,
}

type SingleFruitCount = { apple: number } | { banana: number } | { pear: number }

type FruitCount = typeof fruitCounts
type NewSingleFruitCount = {
  [K in keyof FruitCount]: {
    [K2 in K]: number
  }
}[keyof FruitCount]

const singleFruitCount: NewSingleFruitCount = {
  banana: 12,
}
