// import React from "react";


// const CourseContext = React.createContext({
//     courseIdx: 0,
//     setCourseIdx: () => { }
// });

// export default CourseContext
import React, { createContext, useState } from "react";

export let CourseContext = createContext({});

export default function CourseContextProvider(props) {
    const [courseIdx, setCourseIdx] = useState(0);
    const [course, setCourse] = useState({});

    return <CourseContext.Provider value={{
        courseIdx, setCourseIdx,
        course, setCourse
    }}>
        {props.children}
    </CourseContext.Provider>
};