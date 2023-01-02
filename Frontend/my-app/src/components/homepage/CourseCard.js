import React from 'react'
import { useContext } from 'react'
import CourseContextProvider, { CourseContext } from '../../context/CourseContext';
// import CourseContext from '../../context/CourseInfoContext'
import CurrentViewContext from '../../context/CurrentViewContext'
const CourseCard = ({ course, id }) => {
    const { setView } = useContext(CurrentViewContext);
    const { setCourseId } = useContext(CourseContext);

    function getTotalHours() {
        let totalHours = 0;
        course.sections?.forEach(section => {
            totalHours += section.hours;
        })
        return totalHours;
    }

    function getRating()  {
        let rating = 0;
        course.ratingsAndReviews?.forEach(ratingsAndReview => {
            rating += ratingsAndReview.reviewerRating
        })
        return rating;
    }

    return (
        <div onClick={
            () => {
                setView("course");
                setCourseId(id);
            }
        }
            className="shadow-lg rounded-2xl w-96 p-4 bg-gray-50 hover:bg-blue-50 relative overflow-hidden cursor-pointer">
            <img alt="moto" src="./svg/courseDemoIcon.svg" className="absolute -right-5 -bottom-10 h-40 w-40 mb-4" />
            <div className="w-4/6">
                <p className="text-gray-800 text-lg font-bold mb-2">
                    {course.title}
                </p>
                <p className="text-gray-600 text-lg">
                    {"Total Hours: " + (getTotalHours())}
                </p>
                <p className="text-gray-400 text-xs">
                    {course.description}
                </p>
                <p className="text-blue-500 text-xl pt-2 font-medium">
                    ${course.currentPrice}
                </p>
                <p className="text-blue-600 text-lg pt-2 font-serif">
                    {course.discount?.value * 100 + '% Discount'}
                </p>
                <p className="text-blue-600 text-lg pt-2 font-serif">
                    {`Course Rating: ${getRating()}`}
                </p>
            </div>
        </div>
    )
}

export default CourseCard