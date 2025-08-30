class Magic {
  static replace(str, a, b) {
    return String(str).split(a).join(b);
  }
  static length(data) {
    return Array.isArray(data) || typeof data === "string"
      ? data.length
      : String(data).length;
  }
  static toUpperCase(str) {
    let out = "";
    for (let c of String(str)) {
      const code = c.charCodeAt(0);
      out += code >= 97 && code <= 122 ? String.fromCharCode(code - 32) : c;
    }
    return out;
  }
  static repeat(data, n) {
    return Array.from({ length: n }, () => String(data)).join(" ");
  }
  static count(str) {
    const m = {};
    for (let ch of String(str)) {
      if (ch === " ") continue;
      m[ch] = (m[ch] || 0) + 1;
    }
    return m;
  }
}
console.log(Magic.replace("hello world", "world", "JS"));
console.log(Magic.length([1,2,3,4]));
console.log(Magic.toUpperCase("salom"));
console.log(Magic.repeat("salom", 3));
console.log(Magic.count("hello world"));
