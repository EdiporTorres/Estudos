var studentScores = new Map([["Jhon", 90], ["Bob", 90], ["Edipo", 50]]);
console.log(studentScores.get("Jhon"));
studentScores.set("Jhon", 100);
console.log(studentScores.size);
studentScores.delete("Jhon");
console.log(studentScores.has("Jhon"));
console.log(studentScores.keys());
for (var _i = 0, _a = Array.from(studentScores.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.values());
console.log(studentScores.entries());
