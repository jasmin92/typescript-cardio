export {}

const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return obj[firstKey][secondKey]
}

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: 'cool',
    d: 2,
  },
}

const result = getDeepValue(obj, 'bar', 'c')
