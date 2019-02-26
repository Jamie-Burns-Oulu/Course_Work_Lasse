let students = require("../data/students");
let courses = require("../data/courses");
let grades = require("../data/grades");

const resolvers = {
    Query: {
        // Students
        student: (parent, args, context, info) => {
            return students.find(s => s.id === args.id);
        },
        students: (parent, args, context, info) => {
            return students;
        },

        // Courses
        course: (parent, args, context, info) => {
            return courses.find(c => c.id === args.id);
        },
        courses: (parent, args, context, info) => {
            return courses;
        },

        // Grades
        grade: (parent, args, context, info) => {
            return grades.find(g => g.id === args.id);
        },
        gradeStudentCourse: (parent, args, context, info) => {
            return grades.filter(g => g.studentId === args.studentId && g.courseId === args.courseId);
        },
        grades: (parent, args, context, info) => {
            return grades;
        }
    },

    Mutation: {
        // Students
        createStudent: (parent, args, context, info) => {
            let newStudent = args;
            newStudent.id = (students.length + 1).toString();
            students.push(newStudent);
            return { success: true };
        },
        updateStudent: (parent, args, context, info) => {
            const updateStudents = students.findIndex(s => s.id === args.id);
            if (updateStudents >= 0) {
                students[updateStudents] = args;
                return { success: true };
            } else {
                return { success: false };
            }
        },

        // Courses
        createCourse: (parent, args, context, info) => {
            let newCourse = args;
            newCourse.id = (courses.length + 1).toString();
            courses.push(newCourse);
            return { success: true };
        },
        updateCourse: (parent, args, context, info) => {
            const updateCourse = courses.findIndex(c => c.id === args.id);
            if (updateCourse >= 0) {
                courses[updateCourse] = args;
                return { success: true };
            } else {
                return { success: false };
            }
        },

        // Grades
        createGrade: (parent, args, context, info) => {
            let newGrade = args;
            const findStudent = students.findIndex(s => s.id == args.studentId);
            const findCourse = courses.findIndex(c => c.id == args.courseId);
            newGrade.id = (grades.length + 1).toString();
            if (findCourse >= 0 && findStudent >= 0) {
                grades.push(newGrade);
                return { success: true };
            } else {
                return { success: false };
            }
        },
        updateGrade: (parent, args, context, info) => {
            const findStudent = students.findIndex(s => s.id == args.studentId);
            const findCourse = courses.findIndex(c => c.id == args.courseId);
            const updateGrades = grades.findIndex(g => g.id == args.id);
            if (updateGrades >= 0 && findCourse >= 0 && findStudent >= 0) {
                grades[updateGrades] = args;
                return { success: true };
            } else {
                return { success: false };
            }
        }
    }
};

module.exports = resolvers;
