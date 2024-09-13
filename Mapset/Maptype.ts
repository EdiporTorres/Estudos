let studentScores =  new Map([["Jhon", 90], ["Bob" ,90], ["Edipo", 50]])
console.log(studentScores.get("Jhon"));
studentScores.set("Jhon", 100);
console.log(studentScores.size);
studentScores.delete("Jhon");
console.log(studentScores.has("Jhon"));
console.log(studentScores.keys());
for(let key of Array.from(studentScores.keys())) {
    console.log(key);
    console.log(studentScores.get(key));
}

    console.log(studentScores.values());
    console.log(studentScores.entries());