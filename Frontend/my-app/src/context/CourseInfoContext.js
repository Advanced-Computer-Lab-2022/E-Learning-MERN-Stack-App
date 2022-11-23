import React from "react";


const CourseContext = React.createContext({
    courseIdx: 0,
    setCourseIdx: () => { }
});

export default CourseContext;