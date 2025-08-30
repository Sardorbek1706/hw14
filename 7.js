function squareNumber(n) {
  return Number(
    String(n)
      .split("")
      .map(d => String(Number(d) ** 2))
      .join("")
  );
}
console.log(squareNumber(3221)); 
console.log(squareNumber(3219));
