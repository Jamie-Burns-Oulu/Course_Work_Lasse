const { gql } = require("apollo-server-express");

const schema = gql`
    type Query {
        student(id: ID!): Student
        students: [Student!]!

        course(id: ID!): Course
        courses: [Course!]!

        grade(id: ID!): Grade
        gradeStudentCourse(studentId: String!, courseId: String!): [Grade!]!
        grades: [Grade!]!

    }
    type Student {
        id: ID!
        name: String!
        class: String!
        email: String!      
        birthday: String!
    }
    type Course {
        id: ID!
        teacherName: String!
        description: String!
    }
    type Grade {
        id: ID!
        studentId: String!
        courseId: String!
        grade: String!
    }

    type Mutation {
        createStudent(
            class: String!
            email: String!
            name: String!
            birthday: String!
        ): responseBool!
        updateStudent(
            id: ID!
            class: String!
            email: String!
            name: String!
            birthday: String!
        ): responseBool!

        createCourse(
            teacherName: String!, 
            description: String!
            ): responseBool!
        updateCourse(
            id: ID!
            teacherName: String!
            description: String!
        ): responseBool!

        createGrade(
            studentId: String!, 
            courseId: String!,
            grade: String!
            ): responseBool!
        updateGrade(
            id: ID!
            studentId: String!, 
            courseId: String!,
            grade: String!
        ): responseBool!

    }

    type responseBool {
        success: Boolean!
    }
`;

module.exports = schema;
