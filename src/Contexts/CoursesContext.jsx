import { Axios } from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const coursesContext = createContext(0);

export default function CoursesContextProvider(props) {
    const course1 = {
        name: "Math3",
        title: "Math3 Title",
        description: "Math3 Description",
        mainPicture: "/home/nour-aldeen/my-app/images/clem-onojeghuo-206832-600x500.jpg",
        shortVideo: "https://www.youtube.com/watch?v=DFETwJpsutk",
        price: 300,
        category: "category1",
        chapters: [
            {
                text: "Welcome to Chapter1",
                videos: [
                    "https://www.youtube.com/watch?v=DFETwJpsutk",
                    "https://www.youtube.com/watch?v=DFETwJpsutk"
                ],
                quizes: [
                    "This is the content of quiz1 it is very very not easy!",
                    "This is the content of quiz2 it is very very not easy!"
                ]
            },
            {
                text: "Welcome to Chapter2",
                videos: [
                    "https://www.youtube.com/watch?v=DFETwJpsutk",
                    "https://www.youtube.com/watch?v=DFETwJpsutk"
                ],
                quizes: [
                    "This is the content of quiz1 it is very very not easy!",
                    "This is the content of quiz2 it is very very not easy!"
                ]
            }
        ]
    }
    const course2 = {
        ...course1,
        name: "CSEN101",
        title: "CS1 Title",
        description: "CS1 Description",
        price: 500,
    }
    const course3 = {
        ...course1,
        name: "CSEN303",
        title: "CS3 Title",
        description: "CS3 Description",
        price: 900,
    }
    const course4 = {
        ...course1,
        name: "Signals",
        title: "This is the Signals Course",
        description: "This is a very systematic course",
        price: 375
    }
    const [courses, setCourses] = useState([course1, course2, course3, course4, course1, course2, course3, course4]);

    // async function getAllCourses() {
    //     const response = await Axios.get(`http://localhost:8000/instructor/getCourses`);
    //     console.log(response);
    //     setCourses(response.data);
    // }

    useEffect(() => {
        // getAllCourses();
    }, [])

    return (
        // Provides children with the 'value'
        <coursesContext.Provider value={{ courses }}>
            {props.children}
        </coursesContext.Provider>
    )
}