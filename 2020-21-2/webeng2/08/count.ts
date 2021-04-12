function count<T>(arr: T[], fn: (e: T) => boolean) {
  return arr.filter(fn).length;
}

console.log(
  count([1, 11, 22, 4, 33], (e) => e % 2 === 0),
  count(["apple", "pear", "plum"], (e) => e.startsWith("a"))
);
