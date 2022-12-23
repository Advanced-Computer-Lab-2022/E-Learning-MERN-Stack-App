import React, { useEffect, useState } from 'react'
import CourseFirstDiv from '../components/coursePage/CourseFirstDiv'
import CourseInstructorPlaceHolder from '../components/coursePage/CourseInstructorPlaceHolder'
import Sections from '../components/courseSections/Sections'
import Faqs from '../components/faq/Faqs'
import Layout from '../components/Layout'
import Reviews from '../components/reviews/Reviews'
import CurrentViewContext from '../context/CurrentViewContext'
import { useContext } from 'react'
import CourseAndInstructorRating from '../components/course&InstructorRating/CourseAndInstructorRating'
import { CourseContext } from '../context/CourseContext'
import axios from 'axios'

const courseObj = {
    id: "crs-9789",
    title: "Learn Python: The Complete Python Programming Course",
    description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
    whatYouWillLearnBullets: ["Python Classes and Objects", "Constructors in Python", "Destructors in Python", "Inheritance in Python"],
    courseIncludes: ["Practical Labs", "Interactive Sessions", "17 Hours Total"],
    price: 9.99,
    previewVideoURL: "https://www.youtube.com/embed/rfscVS0vtbw",
    previewVideoTitle: "Learn Python - Full Course for Beginners [Tutorial]",
    rating: 4.6,
    numberOfRatings: 156,
    instructor: {
        id: "inst-1452",
        name: "Corey Schafer",
        role: "Python Developer",
        imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
        numberOfCourses: 5,
        rating: 4.6,
    },
    sections: [
        {
            idx: 1,
            title: "Section 1",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/YYXdXT2l-Gg?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" title="Python Tutorial for Beginners 1: Install and Setup for Mac and Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-01-crs-9789'

        },
        {
            idx: 2,
            title: "Section 2",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/k9TUPpGqYTo?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" title="Python Tutorial for Beginners 2: Strings - Working with Textual Data" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-02-crs-9789',
        },
        {
            idx: 3,
            title: "Section 3",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/khKv-8q7YmY?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" title="Python Tutorial for Beginners 3: Integers and Floats - Working with Numeric Data" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-03-crs-9789',
        },
        {
            idx: 4,
            title: "PDF Notes",
            pdfURL: 'https://bugs.python.org/file47781/Tutorial_EDIT.pdf'
        }

    ],
    reviews: [
        {
            reviewerName: "Name 1",
            reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
            reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
            reviewerRating: 3,
        }, {
            reviewerName: "Name 2",
            reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg",
            reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
            reviewerRating: 4,
        }
    ],
    faqs: [
        [
            {
                question: "Question 1",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
            },
            {
                question: "Question 2",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
            }
        ],
        [
            {
                question: "Question 3",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
            },
        ]
    ]
}

const CoursePage = ({ navActiveState, setNavActiveState, owned }) => {
    const { view } = useContext(CurrentViewContext);
    const { courseId } = useContext(CourseContext);
    const [courses, setCourses] = useState([]);
    const [intendedCourse, setIntendedCourse] = useState({});

    function getCategories() {
        return Array.from(new Set(courses.map(course => course.category)));
    }

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/getCourses')
            .then(response => {
                console.log(response);
                setCourses(response.data.courses);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        courses.forEach(course => {
            if (course._id === courseId)
                setIntendedCourse(course);
        })
    })

    return (
        <Layout>
            {/* TITLE IS ALREADY THERE... */}
            {/* <h1 className='text-center text-red-500 text-lg'>CourseTitle: {intendedCourse.name}</h1> */}
            {/* ......................... */}
            <CourseFirstDiv owned={owned} courseObj={courseObj} />
            <div className="mx-40 my-10 flex">
                <div className='w-1/2'>
                    <CourseInstructorPlaceHolder instructor={courseObj.instructor} />
                </div>
                <div className='w-1/2 shadow-2xl rounded-2xl'>
                    <iframe className='w-full rounded-2xl' width="520" height="340" src={courseObj.previewVideoURL} title={courseObj.previewVideoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <Sections visible={true} courseObj={courseObj} />
            <Reviews visible={true} reviews={courseObj.reviews} />
            <Faqs visible={true} faqs={courseObj.faqs} />
            <CourseAndInstructorRating
                courseRating={courseObj.rating}
                instructorRating={courseObj.instructor.rating}
                owned={owned}
            />
        </Layout>
    )
}

export default CoursePage