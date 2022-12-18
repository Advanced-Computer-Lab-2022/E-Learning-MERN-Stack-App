import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
// import Card from './Card'
// import CardsHolder from './CardsHolder'
// import CardTag from './CardTag'
import CourseCard from './CourseCard'
import CourseCardsWrapper from './CourseCardsWrapper'
import CoursesHolder from './CoursesHolder'

const Homepage = ({ visible }) => {

    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);

    async function getCourses() {
        await axios.get('http://localhost:8000/api/getCourses')
            .then(response => {
                console.log(response);
                setCourses(response.data.courses);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getCourses();
        setCategories(Array.from(new Set(courses.map(course => course.category))));
    }, []);


    if (visible)
        return (
            <>
                {/* <CardsHolder>
                    <Card
                        text={"Text 1"}
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        imgsrc={"./img/courseimg.png"}
                    >
                        <CardTag text={"Category 1"} />
                        <CardTag text={"Category 2"} />
                        <CardTag text={"Category 3"} />
                    </Card>
                    <Card
                        text={"Text 2"}
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        imgsrc={"./img/courseimg.png"}
                    >
                        <CardTag text={"Category 1"} />
                    </Card>
                    <Card
                        text={"Text 3"}
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
                        imgsrc={"./img/courseimg.png"}
                    >
                        <CardTag text={"Category 1"} />
                    </Card>
                </CardsHolder> */}
                <div className='text-center py-10 text-blue-500 text-4xl font-extrabold'>All Categories</div>
                <CoursesHolder>
                    {
                        categories.map(
                            category =>
                                <CourseCardsWrapper headingText={category}>
                                    {
                                        courses.map(course => <CourseCard courseName={course.name} courseDetails={course.description} coursePrice={course.price} />)
                                    }
                                </CourseCardsWrapper>
                        )
                    }
                    {/* <CourseCardsWrapper headingText={"Web Development"}>
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                    </CourseCardsWrapper>
                    <CourseCardsWrapper headingText={"Data Science"}>
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                    </CourseCardsWrapper>
                    <CourseCardsWrapper headingText={"Security"}>
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                        <CourseCard
                            courseName={"Lorem ipsum"}
                            courseDetails={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat enim a orci mattis, at pellentesque velit feugiat"}
                            coursePrice={9.99}
                        />
                    </CourseCardsWrapper> */}
                </CoursesHolder>

            </>
        )
    // return <div>
    //     <ul>
    //         {
    //             categories.map(category => <li>{category}</li>)
    //         }
    //     </ul>
    // </div>;
}

export default Homepage