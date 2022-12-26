import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CourseCard from './CourseCard'
import CourseCardsWrapper from './CourseCardsWrapper'
import CoursesHolder from './CoursesHolder'
import CourseContext from '../../context/CourseContext';
import { FiltersContext } from '../../context/FiltersContext';
// import AllCourses from '../../context/AllCoursesContext';

const Homepage = ({ visible }) => {

    const [courses, setCourses] = useState([]);
    let {
        search, setSearch,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        allCategories, setAllCategories,
        selectedCategory, setSelectedCategory,
        rating, setRating
    } = useContext(FiltersContext);


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
        setAllCategories(getCategories());
    }, [courses])

    function getCategories() {
        return Array.from(new Set(courses.map(course => course.category)));
    }

    var testCourse = {
        ...courses[0]
    }
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
        instructor: {
            id: "inst-1455",
            name: "Edureka",
            role: "Cybersecurity Team",
            imgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg",
            numberOfCourses: 2,
            rating: 4.2,
        },
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
                testId: 'tst-02-crs-1012',
            },
            {
                idx: 3,
                title: "Cybersecurity Career Paths | Skills Required in Cybersecurity Career",
                lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/Sj4TD0LSC_k?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="Cybersecurity Career Paths | Skills Required in Cybersecurity Career | Learn Cybersecurity | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
                testId: 'tst-03-crs-1012',
            },
            {
                idx: 4,
                title: "What is Cryptography? | Introduction to Cryptography",
                lessonEmbed: <iframe width="650" height="300" src="https://www.youtube.com/embed/5jpgMXt1Z9Y?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="What is Cryptography? | Introduction to Cryptography | Cryptography for Beginners | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
                lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
                testId: 'tst-04-crs-1012',
            },
            {
                idx: 5,
                title: "Cross Site Scripting Tutorial | Penetration Testing Tutorial | Web Application Security",
                lessonEmbed: <iframe width="1519" height="577" src="https://www.youtube.com/embed/1qzjWNcQVeI?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" title="Cross Site Scripting Tutorial | Penetration Testing Tutorial | Web Application Security | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
                lessonDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt justo eu quam facilisis varius. In laoreet lorem in elit vehicula.",
                testId: 'tst-05-crs-1012',
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
                reviewerRating: 4,
            }, {
                reviewerName: "Name 2",
                reviewerImgURL: "https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg",
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
    
            ],
            [
                {
                    question: "Question 2",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat aliquam tempus. Phasellus auctor erat turpis, quis laoreet orci luctus eget. Quisque congue ut orci sit amet aliquam."
                },
    
            ]
        ]
    }
    if (visible)
        return (
            <>
                <div className='text-center py-10 text-blue-500 text-4xl font-extrabold'>All Categories</div>
                <CoursesHolder>
                    {
                        getCategories()
                            .map((category, catIndx) =>
                                <CourseCardsWrapper headingText={category}>
                                    {
                                        courses
                                            .filter(course => course.category === category)
                                            .filter(course => course.title.toLowerCase().includes(search.toLowerCase())
                                                || course.createdBy.toLowerCase().includes(search.toLowerCase())
                                                || course.description.toLowerCase().includes(search.toLowerCase()))
                                            .filter(course => course.price >= minPrice && course.price <= maxPrice)
                                            .filter(course => {
                                                if (selectedCategory === '') return true
                                                return course.category === selectedCategory
                                            })
                                            .filter(course => {
                                                if (rating === -1) return true
                                                return course.rating === rating
                                            })
                                            .map((course, index) =>
                                                <CourseCard key={index} course={course} id={(course._id)} />
                                            )
                                    }

                                </CourseCardsWrapper>
                            )
                    }

                    <CourseCard key={99} course={courseObj} />
                    {/* For Stripe Testing */}
                    {/* <CourseCard key={1} course={testCourse} /> */}
                </CoursesHolder>
            </>
        )
}

export default Homepage