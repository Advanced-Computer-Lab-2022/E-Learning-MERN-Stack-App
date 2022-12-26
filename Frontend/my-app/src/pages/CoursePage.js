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


// Python Course
// const courseObj = {
//     id: "crs-9789",
//     category: "Programming",
//     title: "Learn Python: The Complete Python Programming Course",
//     description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
//     whatYouWillLearnBullets: ["Python Classes and Objects", "Constructors in Python", "Destructors in Python", "Inheritance in Python"],
//     courseIncludes: ["Practical Labs", "Interactive Sessions", "17 Hours Total"],
//     price: 9.99,
//     previewVideoURL: "https://www.youtube.com/embed/rfscVS0vtbw",
//     previewVideoTitle: "Learn Python - Full Course for Beginners [Tutorial]",
//     rating: 4.6,
//     numberOfRatings: 156,
//     instructor: {
//         id: "inst-1452",
//         name: "Corey Schafer",
//         role: "Python Developer",
//         imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
//         numberOfCourses: 5,
//         rating: 4.6,
//     },
//     sections: [
//         {
//             idx: 1,
//             title: "Section 1",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/YYXdXT2l-Gg?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" title="Python Tutorial for Beginners 1: Install and Setup for Mac and Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-01-crs-9789'

//         },
//         {
//             idx: 2,
//             title: "Section 2",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/k9TUPpGqYTo?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" title="Python Tutorial for Beginners 2: Strings - Working with Textual Data" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-02-crs-9789',
//         },
//         {
//             idx: 3,
//             title: "Section 3",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/khKv-8q7YmY?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" title="Python Tutorial for Beginners 3: Integers and Floats - Working with Numeric Data" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-03-crs-9789',
//         },
//         {
//             idx: 4,
//             title: "PDF Notes",
//             pdfURL: 'https://bugs.python.org/file47781/Tutorial_EDIT.pdf'
//         }

//     ],
//     reviews: [
//         {
//             reviewerName: "Name 1",
//             reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
//             reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
//             reviewerRating: 3,
//         }, {
//             reviewerName: "Name 2",
//             reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg",
//             reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
//             reviewerRating: 4,
//         }
//     ],
//     faqs: [
//         [
//             {
//                 question: "Question 1",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             },
//             {
//                 question: "Question 2",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             }
//         ],
//         [
//             {
//                 question: "Question 3",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             },
//         ]
//     ]
// }

// // C++
// const courseObj = {
//     id: "crs-1010",
//     category: "Programming",
//     title: "Learn C++: The Complete C++ Programming Course",
//     description: "Learn A-Z everything about C++, from the basics, to advanced topics",
//     whatYouWillLearnBullets: ["C++ Classes and Objects", "Constructors in C++", "Destructors in C++", "Inheritance in C++"],
//     courseIncludes: ["Practical Labs", "Interactive Sessions", "26 Hours Total"],
//     price: 6.99,
//     previewVideoURL: "https://www.youtube.com/embed/18c3MTX0PK0?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",
//     previewVideoTitle: "Welcome to C++",
//     rating: 4.7,
//     numberOfRatings: 12,
//     instructor: {
//         id: "inst-1453",
//         name: "The Cherno",
//         role: "C++ Developer",
//         imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg",
//         numberOfCourses: 2,
//         rating: 4.2,
//     },
//     sections: [
//         {
//             idx: 1,
//             title: "How C++ Works?",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/SfGuIVzE_Os?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb" title="How C++ Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-01-crs-1010'

//         },
//         {
//             idx: 2,
//             title: "How the C++ Compiler Works? ",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/3tIqpEmWMLI?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb" title="How the C++ Compiler Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-02-crs-1010',
//         },
//         {
//             idx: 3,
//             title: "PDF Notes",
//             pdfURL: 'https://www.tutorialspoint.com/cplusplus/cpp_tutorial.pdf'
//         }

//     ],
//     reviews: [
//         {
//             reviewerName: "Name 1",
//             reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg",
//             reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
//             reviewerRating: 4,
//         }, {
//             reviewerName: "Name 2",
//             reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
//             reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
//             reviewerRating: 2,
//         }
//     ],
//     faqs: [
//         [
//             {
//                 question: "Question 1",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             },
//             {
//                 question: "Question 2",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             }
//         ],
//         [
//             {
//                 question: "Question 3",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             },
//         ]
//     ]
// }

// // Java
// const courseObj = {
//     id: "crs-1011",
//     category: "Programming",
//     title: "Learn Java The Complete Java Programming Course",
//     description: "Learn A-Z everything about Java, from the basics, to advanced topics",
//     whatYouWillLearnBullets: ["Java Classes and Objects", "Constructors in Java", "Destructors in Java", "Inheritance in Java"],
//     courseIncludes: ["Practical Labs", "Interactive Sessions", "14 Hours Total"],
//     price: 19.99,
//     previewVideoURL: "https://www.youtube.com/embed/VHbSopMyc4M?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5",
//     previewVideoTitle: "Why take this Java Course?",
//     rating: 4.7,
//     numberOfRatings: 12,
//     instructor: {
//         id: "inst-1454",
//         name: "Neso Academy",
//         role: "Java Developer Team",
//         imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg",
//         numberOfCourses: 2,
//         rating: 4.2,
//     },
//     sections: [
//         {
//             idx: 1,
//             title: "Programs and Programming Languages",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/-C88r0niLQQ?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" title="Programs and Programming Languages" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-01-crs-1011'

//         },
//         {
//             idx: 2,
//             title: "Introduction to Java Programming",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/mG4NLNZ37y4?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" title="Introduction to Java Programming" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-02-crs-1011',
//         },
//         {
//             idx: 3,
//             title: "Anatomy of Java Program",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/vsxYucdzimA?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" title="Anatomy of Java Program" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-03-crs-1011',
//         },
//         {
//             idx: 4,
//             title: "Displaying Messages in Java",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/ifirpBZLeCk?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" title="Displaying Messages in Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-04-crs-1011',
//         },
//         {
//             idx: 5,
//             title: "Displaying Numbers in Java",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/UFMqdnUh4nI?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" title="Displaying Numbers in Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-05-crs-1011',
//         },
//         {
//             idx: 6,
//             title: "Configuring our Java Development Environment",
//             lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/FjGMYpXS9iE?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" title="Configuring our Java Development Environment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//             lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
//             testId: 'tst-06-crs-1011',
//         },
//         {
//             idx: 7,
//             title: "PDF Notes",
//             pdfURL: "https://www.tutorialspoint.com/java/java_tutorial.pdf"
//         }

//     ],
//     reviews: [
//         {
//             reviewerName: "Name 1",
//             reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
//             reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
//             reviewerRating: 3,
//         }, {
//             reviewerName: "Name 2",
//             reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg",
//             reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
//             reviewerRating: 1,
//         }
//     ],
//     faqs: [
//         [
//             {
//                 question: "Question 1",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             },
//             {
//                 question: "Question 2",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             }
//         ],
//         [
//             {
//                 question: "Question 3",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             },
//             {
//                 question: "Question 4",
//                 answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
//             }
//         ]
//     ]
// }

// // Security
const courseObj = {
    id: "crs-1012",
    category: "Security",
    title: "Cyber Security Training for Beginners",
    description: "This Edureka playlist on 'Cyber Security Training for Beginners' will help you learn Cyber Security from scratch. You will get to know what is the role of Cyber Security in today's IT world and how different kind of attacks are taken care by Cyber Security.",
    whatYouWillLearnBullets: ["Cybersecurity Frameworks", "Cybersecurity Career Paths", "Cryptography", "Cross Site Scripting"],
    courseIncludes: ["Practical Labs", "Interactive Sessions", "34 Hours Total"],
    price: 49.99,
    previewVideoURL: "https://www.youtube.com/embed/ooJSgsB5fIE?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_",
    previewVideoTitle: "What is Cyber Security? | Introduction to Cyber Security | Cyber Security Training",
    rating: 4.7,
    numberOfRatings: 12,
    progress: 80,
    instructor: {
        id: "inst-1455",
        name: "Edureka",
        role: "Cybersecurity Team",
        imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg",
        numberOfCourses: 2,
        rating: 4.2
    },
    certificateURL: "https://upload.wikimedia.org/wikipedia/commons/9/98/Student_certificate.pdf",
    sections: [
        {
            idx: 1,
            title: "Cybersecurity Frameworks | NIST Cybersecurity Framework | Cybersecurity Certification",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/uk8-jJgu8-I?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="Cybersecurity Frameworks | NIST Cybersecurity Framework | Cybersecurity Certification | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-01-crs-1012'

        },
        {
            idx: 2,
            title: "Cybersecurity Tools | Popular Tools for Cybersecurity Threats",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/KgtevibJlTE?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="Cybersecurity Tools | Popular Tools for Cybersecurity Threats  | Cybersecurity Training | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-02-crs-1012'
        },
        {
            idx: 3,
            title: "Cybersecurity Career Paths | Skills Required in Cybersecurity Career",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/Sj4TD0LSC_k?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="Cybersecurity Career Paths | Skills Required in Cybersecurity Career | Learn Cybersecurity | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-03-crs-1012'
        },
        {
            idx: 4,
            title: "What is Cryptography? | Introduction to Cryptography",
            lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/5jpgMXt1Z9Y?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="What is Cryptography? | Introduction to Cryptography | Cryptography for Beginners | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-04-crs-1012'
        },
        {
            idx: 5,
            title: "Cross Site Scripting Tutorial | Penetration Testing Tutorial | Web Application Security",
            lessonEmbed: <iframe width="1519" height="577" src="https://www.youtube.com/embed/1qzjWNcQVeI?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="Cross Site Scripting Tutorial | Penetration Testing Tutorial | Web Application Security | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
            testId: 'tst-05-crs-1012'
        },
        {
            idx: 6,
            title: "PDF Notes",
            pdfURL: "https://www.ftc.gov/system/files/attachments/cybersecurity-small-business/cybersecuirty_sb_factsheets_all.pdf"
        }
    ],
    reviews: [
        {
            reviewerName: "Name 1",
            reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
            reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
            reviewerRating: 4
        },
        {
            reviewerName: "Name 2",
            reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg",
            reviewerReview: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut perspiciatis unde omnis.",
            reviewerRating: 4
        }
    ],
    faqs: [
        [
            {
                question: "Question 1",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
            },

        ],
        [
            {
                question: "Question 2",
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

    if (view === 'course')
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