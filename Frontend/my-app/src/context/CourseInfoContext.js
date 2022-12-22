// import React from "react";


// const CourseContext = React.createContext({
//     courseIdx: 0,
//     setCourseIdx: () => { }
// });

// export default CourseContext
import React, { createContext, useState } from "react";

export let CourseInfoContext = createContext({});

export default function CourseInfoProvider(props) {
    const [courseIdx, setCourseIdx] = useState(0);
    const [course, setCourse] = useState({});

    return <CourseInfoContext.Provider value={{
        courseIdx, setCourseIdx,
        course, setCourse
    }}>
        {props.children}
    </CourseInfoContext.Provider>
};