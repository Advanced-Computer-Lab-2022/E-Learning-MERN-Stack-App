// import React from "react";


// const CourseContext = React.createContext({
//     courseIdx: 0,
//     setCourseIdx: () => { }
// });

// export default CourseContext
import React, { createContext, useState } from "react";

export let CourseContext = createContext(0);

export default function CourseContextProvider(props) {
    const [courseId, setCourseId] = useState(0);

    return <CourseContext.Provider value={{
        courseId, setCourseId
    }}>
        {props.children}
    </CourseContext.Provider>
};