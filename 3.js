function printPascalsTriangle(n) {
  if (n <= 0) return;
  let row = [1];
  for (let i = 0; i < n; i++) {
    console.log(row.join(" "));
    const next = [1];
    for (let j = 1; j < row.length; j++) next[j] = row[j - 1] + row[j];
    next.push(1);
    row = next;
  }
}
printPascalsTriangle(5);
