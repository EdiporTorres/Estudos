let courses= new Set()
courses.add("Math")
courses.add( "Science")
courses.add( "English")
courses.add( "History")
console.log(courses.size);
console.log(courses.values());

courses.forEach(function(courses){
    console.log(courses);
})
