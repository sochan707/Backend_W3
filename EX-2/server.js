// server.js
import express from 'express';
import courses from "./course.js";
const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    let courseFiltered = courses.filter(course => course.department.toLowerCase() === dept.toLowerCase());

    if (level) {
        courseFiltered = courseFiltered.filter(course => course.level.toLowerCase() === level.toLowerCase());
    }
    if (minCredits) {
        courseFiltered = courseFiltered.filter(course => course.credits >= parseInt(minCredits));
    }
    if (maxCredits) {
        courseFiltered = courseFiltered.filter(course => course.credits <= parseInt(maxCredits));
    }
    if (semester) {
        courseFiltered = courseFiltered.filter(course => course.semester.toLowerCase() === semester.toLowerCase());
    }
    if (instructor) {
        courseFiltered = courseFiltered.filter(course => course.instructor.toLowerCase().includes(instructor.toLowerCase()));
    }

    res.json(courseFiltered);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
