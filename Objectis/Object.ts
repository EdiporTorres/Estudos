var student = {
    id: '2',
    nome: 'Edipo',
    sobrenome: 'Reis'
};

console.log(student.id);

for (var item in student) {
    console.log(item);
    console.log (student[item]);
}