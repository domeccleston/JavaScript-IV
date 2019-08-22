// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello, my name is ${name}, I am from ${location}`;
    }
}

class Instructor extends Person {
    constructor(name, age, location, speciality, favLanguage, catchPhrase) {
        super(name, age, location);
				this.speciality = speciality;
				this.favLanguage = favLanguage;
				this.catchPhrase = catchPhrase;
		}
		demo(subject) {
			return `Today we are learning about ${subject}`;
		}
		grade(student, subject) {
			return `${student.name} received a perfect grade on ${subject}`
		}
}

var gabe = new Instructor("Gabe", 42, "Spain", "Web Dev", "Javascript", "Brutal");

class Student extends Person {
    constructor(name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
				this.className = className;
				this.favSubjects = favSubjects;
    }
    listsSubjects() {
        this.favSubjects.map(subject => console.log(subject));
    }
    PRAssignment(subject) {
        return `student has submitted an assigment for ${subject}`;
    }
    sprintChallenge(subject) {
        return `student has completed a sprint challenge on ${subject}`;
    }
}

let dom = new Student("Dom", 23, "Sheffield", "Student", "WEBEU3", ["React", "Node", "CS"]);
