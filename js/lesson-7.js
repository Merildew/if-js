const obj1 = {
  a: "a",
  b: {
    a: "a",
    b: "b",
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: "b",
    a: "a",
  },
  a: "a",
};
const obj3 = {
  a: {
    c: {
      a: "a",
    },
    b: "b",
    a: "a",
  },
  b: "b",
};

const deepEqual = (object1, object2) => {
  if (
    Object.getOwnPropertyNames(object1).length !==
    Object.getOwnPropertyNames(object2).length
  )
    return false;
  for (const key in object1) {
    if (
      typeof object1[key] === typeof object2[key] &&
      typeof object1[key] === "object"
    )
      return deepEqual(object1[key], object2[key]);
    else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
