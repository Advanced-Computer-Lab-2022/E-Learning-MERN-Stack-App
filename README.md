
# E-Learning
  Welcome to our E-Learning web application! This application allows students to enroll in online courses and learn at their own pace. With a variety of courses available in a range of subjects, there is something for everyone.
  
## Motivation
Developing a MERN stack web application can be a rewarding and exciting project to undertake. Not only will you have the opportunity to build a fully functional web application from scratch, but you will also have the chance to work with some of the latest and most popular technologies in the industry. The MERN stack (MongoDB, Express, React, and Node.js) provides a strong foundation for your web application, allowing you to focus on building a great user experience and innovative features. Additionally, learning and working with the MERN stack can open up new career opportunities and help you stay up-to-date with the constantly evolving world of web development. Overall, embarking on a MERN stack web application project is a fantastic way to challenge yourself, learn new skills, and create something truly impactful.
  
## Build Status
The web application is now complete. The application is stable and ready for deployment. All necessary features and functionality have been implemented and thoroughly tested. The application is built using the latest versions of MongoDB, Express, React, and Node.js, ensuring a solid foundation and excellent performance. Overall, the web application is in a fully finished state and ready for use.
  
## Code Style
The code style for this MERN stack web application follows the StandardJS style guide. This style guide promotes a consistent code style that is easy to read and understand. In addition to the StandardJS style guide, the following guidelines are also followed:

 - Use camelCase for variable names
 - Use PascalCase for component names
 - Place quotes around JSX attributes
 - Use semicolons at the end of statements

By adhering to these code style guidelines, we can ensure that the codebase is maintainable and easy to work with for all developers on the team.

## Screenshots


![Landing](https://user-images.githubusercontent.com/47356106/210193114-3553eee8-5f41-4c75-9ae9-42c452511fe6.png)
![CoursePage](https://user-images.githubusercontent.com/47356106/210193156-ae885161-3b48-4a87-aa68-1841f13460e9.png)
![Lesson](https://user-images.githubusercontent.com/47356106/210193058-07d752e2-876c-420e-b598-5ae154185e9d.png)



## Technologies
The MERN stack is a popular stack for building web applications and consists of the following technologies:

-   **M**ongoDB: A NoSQL database used for storing data in the form of JSON-like documents.
-   **E**xpress: A minimalist web framework for Node.js used for building the backend of web applications.
-   **R**eact: A JavaScript library for building user interfaces.
-   **N**ode.js: A JavaScript runtime used for building the backend of web applications.

Together, these technologies form a full-stack solution for building web applications. In a MERN stack web application, MongoDB is used to store data, Express is used to build the backend, React is used to build the frontend, and Node.js is used to run the application.

## Features
Here are some potential features that are included in our E-Learning web application:

-   **Course catalog**: A directory of all the courses offered on the website, organized by subject.
-   **Course pages**: Detailed pages for each course, including a description of the course, a list of lessons.
-   **Assessment tools**: Tools for creating and administering quizzes, exams, or other assessments as part of a course.
-   **Instructor profiles**: Profiles for each instructor, including their background and experience, as well as a list of the courses they teach.
-   **Search function**: A search tool that allows students to find courses or lessons based on keywords or specific criteria.
-   **Enrollment system**: A system for enrolling in courses and keeping track of progress.
-   **Certification**: The ability to earn a certificate of completion for a course.

## Installation Step-by-Step Guide
Here is a guide for installing and setting up the web application:

1.  First, make sure you have the latest versions of Node.js.
2.  Next, clone the web application repository from GitHub or download the source code. [Repo's Link](https://github.com/Advanced-Computer-Lab-2022/team_name.git)
3.  Open a terminal and navigate to the backend directory of the project.
4.  Run the command `npm install` to install all the necessary dependencies for the backend.
5.  Create a `.env` file in the backend directory and add any necessary environment variables.
6.  In the terminal, run the command `npm run start` to start the backend server.
7.  Open a new terminal window and navigate to the client directory of the project.
8.  Run the command `npm install` to install the client dependencies.
9.  Run the command `npm start` to start the client development server.
10.  The MERN stack web application should now be running on your machine.

## Installation Code Guide
1. Clone the repo. `git clone https://github.com/Advanced-Computer-Lab-2022/team_name.git`.
2. Head to the backend folder using the terminal `cd team_name/Backend `.
3. Install all the required dependencies for the backend `npm install`.
4. Start the backend server `npm run start`.
5. Head to the previous folder using the terminal `cd ..`
6. Head to the frontend folder using the terminal `cd Frontend/my-app`.
7. Install all the required dependencies for the frontend `npm install`.
8. Start the client development server `npm start`.

Your default browser should automatically open on the web application's address.

## How to use
Here is a how to use guide for using the E-Learning web application:

1.  First, create an account on the website by providing your personal information and creating a username and password.
2.  Once you have an account, you can browse the course catalog to find courses that interest you. You can filter courses by subject to find the right fit for you.
3.  When you find a course you want to take, click the "Buy Now" button to register for the course.
4.  Once you are enrolled in a course, you can access the course content by visiting the course page.
5.  On the course page, you will find a list of sections. Click on a section to view the lesson content.
6.  Sections include quizzes. You can complete these assessments by following the prompts on the page.
7.  As you progress through the course, your progress will be tracked in your course page.
8.  Upon completing a course, you may be eligible to earn a certificate of completion. 

## Used API's
**1.For Guest**
1.1. POST /api/signup
Creates a new user.

Parameters

firstName: the first name of the user (required)
lastName: the last name of the user (required)
userName: the username of the user (required)
email: the email of the user (required)
password: the password of the user (required)
country: the country of the user (required)
gender: the gender of the user (required)
Response

On success:

{
  "message": "user added successfuly"
}
On failure:

{
  "message": "Something went wrong"
}

1.2 POST /api/signin
Logs in an existing user.

Parameters

userName: the username of the user (required)
password: the password of the user (required)
Response

On success:

Copy code
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNnNGo1ajZrN2w4bTluMG8xcDIxIiwicm9sZSI6Ikd1ZXN0IiwidXNlck5hbWUiOiJhZG1pbjEiLCJpYXQiOjE1ODI4MjA4MzEsImV4cCI6MTU4MjkxNjgzMX0.Ys-s4o4eIyW_aDnPaa13lRpI18vZ8Wl-L09j3Y3iZgI",
  "guest": {
    "_id": "5f3g4j5j6k7l8m9n0o1p2q",
    "firstName": "John",
    "lastName": "Smith",
    "userName": "admin1",
    "email": "john@example.com",
    "password": "$2b$10$E5l5h5L5j5y5n5f5p5r5.5B5o5w5e5r5i5n5g5",
    "country": "USA",
    "gender": "Male",
    "courses": []
  }
}
On failure:

Copy code
{
  "message": "Invalid password"
}

1.3 GET /api/viewMyCourses
Gets a list of all courses that a user is enrolled in.

Response

{
  "myCourses": [
    {
    "_id": "5f3g4h5j6k7l8m9n0o1p2q",
    "title": "Introduction to MERN Stack",
    "description": "Learn the basics of the MERN stack and how to build a full-stack web application.",
    "instructor": "Jane Doe",
    "enrolledStudents": [
      "5f3g4h5j6k7l8m9n0o1p2q"
     ]
    }
    ]
 }
 
 **2.For Instructor**
2.1 POST /api/instructors/signin
Signs in an existing instructor.

Parameters

userName: the username of the instructor (required)
password: the password of the instructor (required)
Response

Copy code
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNnNGg1ajZrN2w4bTluMG8xcDIiLCJyb2xlIjoiaW5zdHJ1Y3RvciIsInVzZXJOYW1lIjoiam9obiIsImlhdCI6MTU5NDcyODkyOSwiZXhwIjoxNTk0ODE1MzI5fQ.pFVuJjkxw8VAh3EqHMY7VuZJQWdV8Iu9XnBV7YcYjw8",
  "instructor": {
    "_id": "5f3g4h5j6k7l8m9n0o1p2q",
    "firstName": "John",
    "lastName": "Smith",
    "userName": "john",
    "email": "john@example.com",
    "courses": [],
    "ratings": [],
    "reviews": []
  }
}
2.2 POST /api/instructors/createCourse
Creates a new course.

Parameters

title: the title of the course (required)
description: the description of the course (required)
category: the category of the course (required)
price: the price of the course (required)
previewVideoTitle: the title of the preview video for the course (required)
previewVideoURL: the URL of the preview video for the course (required)
firstBullet: the first bullet point for the course (required)
secondBullet: the second bullet point for the course (required)
thirdBullet: the third bullet point for the course (required)
firstInclude: the first item to be included in the course (required)
secondInclude: the second item to be included in the course (required)
thirdInclude: the third item to be included in the course (required)
Response

{
  "message": "Course created successfuly...!"
}
2.3 GET /api/instructors/getCourses
Gets a list of courses created by the instructor.

Response

[  {    "_id": "5f3g4h5j6k7l8m9n0o1p2q",    "title": "Introduction to MERN Stack",    "description": "Learn the basics of the MERN stack and how to build a full-stack web application.",    "category": "Web Development",    "price": 199.99,    "previewVideoTitle": "Preview Video",    "previewVideoURL": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",    "firstBullet": "Learn the basics of the MERN stack",    "secondBullet": "Build a full-stack web application from scratch",    "thirdBullet": "Deploy your application to the cloud",    "firstInclude": "Lifetime access to course material",    "secondInclude": "30-day money-back guarantee",    "thirdInclude": "Certificate of completion",    "createdBy": "john",    "sections": [],
    "faqs": []
  },
  ...
]

2.4 GET /api/instructors/getRatingsAndReviews
Gets ratings and reviews for the instructor.

Response

{
  "_id": "5f3g4h5j6k7l8m9n0o1p2q",
  "firstName": "John",
  "lastName": "Smith",
  "userName": "john",
  "email": "john@example.com",
  "courses": [],
  "ratings": [
    {
      "courseId": "5f3g4h5j6k7l8m9n0o1p2q",
      "rating": 4.5
    },
    ...
  ],
  "reviews": [
    {
      "courseId": "5f3g4h5j6k7l8m9n0o1p2q",
      "review": "Great course! The instructor was very knowledgeable and helpful."
    },
    ...
  ]
}
2.5 GET /api/admins/viewAllCourseRequests
Gets a list of all course requests made by instructors.

Response

{
  "requests": [
    {
      "_id": "5f3g4h5j6k7l8m9n0o1p2q",
      "title": "Introduction to MERN Stack",
      "description": "Learn the basics of the MERN stack and how to build a full-stack web application.",
      "category": "Web Development",
      "price": 49.99,
      "createdBy": "john"
    },
    {
      "_id": "6a7b8c9d0e1f2g3h4i5j6k",
      "title": "Advanced React",
      "description": "Take your React skills to the next level with this advanced course.",
      "category": "Web Development",
      "price": 99.99,
      "createdBy": "mary"
    }
  ]
}
2.6 POST /api/instructors/setSelectedPromotions
Sets promotions on selected courses.

Parameters

courses: an array of objects containing the courseId and value of the promotion for each course, as well as the endDate of the promotion (required)
Copy code
[  {    "courseId": "5f3g4h5j6k7l8m9n0o1p2q",    "value": 20,    "endDate": "2022-01-01"  },  {    "courseId": "6a7b8c9d0e1f2g3h4i5j6k",    "value": 30,    "endDate": "2022-01-01"  }]
Response

{
  "message": "Offer added successfuly"
}
2.7 POST /api/instructors/setPromotionsOnAll
Sets promotions on all courses.

Parameters

value: the value of the promotion (required)
endDate: the end date of the promotion (required)
Response


{
  "message": "Offer added successfuly"
}
2.8 POST /api/instructors/removePromotions
Removes promotions on all courses with a specific end date.

Parameters

endDate: the end date of the promotions to be removed (required)
Response

{
  "message": "Offer removed"
}

**3.For corporate trainee**
3.1 POST /api/orgGuests/signin
Signs in an organization guest.

Parameters

userName: the organization guest's user name (required)
password: the organization guest's password (required)
Response

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNnNGg1ajZrN2w4bTluMG8xcDIiLCJyb2xlIjoiaW5zdHJ1Y3RvciIsInVzZXJOYW1lIjoiam9obiIsImlhdCI6MTU5NDcyODkyOSwiZXhwIjoxNTk0ODE1MzI5fQ.pFVuJjkxw8VAh3EqHMY7VuZJQWdV8Iu9XnBV7YcYjw8",
  "orgGuest": {
    "_id": "5f3g4h5j6k7l8m9n0o1p2q",
    "firstName": "John",
    "lastName": "Smith",
    "userName": "john",
    "email": "john@example.com",
    "courses": [],
    "ratings": [],
    "reviews": []
  }
}
3.2 GET /api/orgGuests/viewMyCourses
Gets a list of the logged in user's courses.

Response

{
  "myCourses": [
    {
      "_id": "5f3g4h5j6k7l8m9n0o1p2q",
      "title": "Introduction to MERN Stack",
      "description": "Learn the basics of the MERN stack and how to build a full-stack web application.",
      "category": "Web Development",
      "price": 199.99,
      "previewVideoTitle": "MERN Stack Overview",
      "previewVideoURL": "https://www.youtube.com/watch?v=zpwuLWUAZq4",
      "firstBullet": "Learn the basics of the MERN stack",
      "secondBullet": "Build a full-stack web application from scratch",
      "thirdBullet": "Learn how to deploy your app to the web",
      "firstInclude": "Lifetime access to course material",
      "secondInclude": "Project files and code examples",
      "thirdInclude": "Instructor support",
      "createdBy": "john"
    }
  ]
}
3.3 POST /api/orgGuests/requestCourse
Requests a course.

Parameters

id: the ID of the course to be requested (required)
Response

{
  "message": "request sent successfuly...!"
}
3.4 GET /api/orgGuests/viewMyCourseRequests
Gets a list of the logged in user's course requests.

Response

{
  "requests": [
    {
      "_id": "5f3g4h5j6k7l8m9n0o1p2q",
      "orgGuestUserName": "john",
      "course": "6a7b8c9d0e1f2g3h4i5j6k",
      "state": "pending"
    }
    ]
**4.For Admin**
4.1 Signup
POST /api/admin/signup: Register a new admin user.
4.2 Signin
POST /api/admin/signin: Sign in an admin user.
4.3 Add OrgGuest
POST /api/admin/addOrgGuest: Add a new organizational guest user.
4.4 Add Instructor
POST /api/admin/addInstructor: Add a new instructor user.
4.5 View All Course Requests
GET /api/admin/viewAllCourseRequests: View all course requests made by organizational guests.
4.6 Set Selected Promotions
POST /api/admin/setSelectedPromotions: Set promotional discounts on selected courses.
4.7 Set Promotions on All
POST /api/admin/setPromotionsOnAll: Set promotional discounts on all courses.
4.8 Remove Promotions
POST /api/admin/removePromotions: Remove promotional discounts from courses.
4.9 View My Courses
GET /api/orgGuest/viewMyCourses: View all courses owned by a specific organizational guest.
4.10 Request Course
POST /api/orgGuest/requestCourse: Request access to a course as an organizational guest.
4.11 View My Course Requests
GET /api/orgGuest/viewMyCourseRequests: View all course requests made by a specific organizational guest.
4.12 Is Admin
GET /api/isAdmin: Verify if a user is an admin.
Note: These endpoints may require authorization and authentication.

**for the all users**
The first function appears to handle a POST request to the /changePassword route and updates the password for either a "corporateTrainee" or an "instructor" user, depending on the value of the role field in the user's JSON web token (JWT).

The second function appears to handle a POST request to the /addVideoNote route and adds a note for either an "individualTrainee" or a "CorporateTrainee" user, depending on the value of the role field in the user's JWT. The note is associated with a specific video, identified by the videoId field in the user's watching field.

The third function appears to handle a POST request to the /editInfo route and updates the information for either an "instructor" or a "corporateTrainee" user, depending on the value of the role field in the user's JWT. The updated information includes the user's userName, email, password, firstName, lastName, country, and bio. If the update is successful, the function returns a new JWT with the updated information.

The fourth function appears to handle a POST request to the /createCourse route and creates a new course for an "instructor" user, identified by the user's JWT. The new course includes the title, description, price, and duration fields. If the course creation is successful, the function returns the new course.

The fifth function appears to handle a GET request to the /courses route and returns a list of all courses.

The sixth function appears to handle a GET request to the /courses/:id route and returns a specific course, identified by the id parameter in the route.

The seventh function appears to handle a POST request to the /enroll route and enrolls either an "individualTrainee" or a "corporateTrainee" user in a specific course, identified by the id field in the request body. The enrollment also includes the price of the course and the userName of the enrolled user. If the enrollment is successful, the function returns a message indicating that the enrollment was successful.


## Stripe License
This project uses Stripe to process payments. By using this project, you agree to be bound by the Stripe Services Agreement.

You can find the full text of the Stripe Services Agreement at the following link:

https://stripe.com/legal

Please make sure to read and understand the Stripe Services Agreement before using this project.

If you have any questions about the Stripe Services Agreement or how it applies to your use of this project, please contact Stripe at support@stripe.com.    


## Contribute
Thank you for your interest in contributing to our MERN stack web application! We welcome any contributions, big or small, that can help improve the project.

If you would like to contribute, here are some ways you can get involved:

1.  Report any bugs or issues you find while using the application. You can do this by opening an issue on our GitHub repository.
    
2.  Suggest new features or improvements by opening an issue on our GitHub repository.
    
3.  Contribute code to the project by forking the repository and creating a pull request. Before submitting a pull request, make sure to follow our code style guidelines .
 
We appreciate any and all contributions to the project and are grateful for your help in making it better. Thank you for your support!

## Credits

We would like to extend our thanks to the following individuals for their contributions to this project:

-   [Loay Hesham](https://github.com/LoayHesham0) 
-   [Ahmed Bodayer](https://github.com/AhmadBodayr) 
-   [Nour El Deen](https://github.com/nouraldeenm0) 
-   [Mina Samy](https://github.com/minasamy9090) 

Without the help of these individuals, this project would not have been possible. Thank you for your support and contributions!
