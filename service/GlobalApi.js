const dummyResumes = [
    { 
        id: 1, 
        title: 'Software Engineer Resume', 
        createdAt: '2024-09-01', 
        content: JSON.stringify({
            firstName: 'James',
            lastName: 'Carter',
            jobTitle: 'Full Stack Developer',
            address: '525 N Tryon Street, NC 28117',
            phone: '(123)-456-7890',
            email: 'example@gmail.com',
            themeColor: "#ff6666",
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            experience: [
                {
                    id: 1,
                    title: 'Full Stack Developer',
                    companyName: 'Amazon',
                    city: 'New York',
                    state: 'NY',
                    startDate: 'Jan 2021',
                    endDate: '',
                    currentlyWorking: true,
                    workSummary: 'Designed, developed, and maintained full-stack applications using React and Node.js. Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers. Maintaining the React Native in-house organization application. Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.'
                },
                {
                    id: 2,
                    title: 'Frontend Developer',
                    companyName: 'Google',
                    city: 'Charlotte',
                    state: 'NC',
                    startDate: 'May 2019',
                    endDate: 'Jan 2021',
                    currentlyWorking: false,
                    workSummary: 'Designed, developed, and maintained full-stack applications using React and Node.js. Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers. Maintaining the React Native in-house organization application. Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.'
                }
            ],
            education: [
                {
                    id: 1,
                    universityName: 'Western Illinois University',
                    startDate: 'Aug 2018',
                    endDate: 'Dec 2019',
                    degree: 'Master',
                    major: 'Computer Science',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
                },
                {
                    id: 2,
                    universityName: 'Western Illinois University',
                    startDate: 'Aug 2018',
                    endDate: 'Dec 2019',
                    degree: 'Master',
                    major: 'Computer Science',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
                }
            ],
            skills: [
                {
                    id: 1,
                    name: 'Angular',
                    rating: 80,
                },
                {
                    id: 2,
                    name: 'React',
                    rating: 100,
                },
                {
                    id: 3,
                    name: 'MySQL',
                    rating: 80,
                },
                {
                    id: 4,
                    name: 'React Native',
                    rating: 100,
                }
            ]
        }),
        userEmail: 'anuragkashyap026@gmail.com'
    },
    { 
        id: 2, 
        title: 'Product Manager Resume', 
        createdAt: '2024-08-25', 
        content: JSON.stringify({
            firstName: 'Alice',
            lastName: 'Smith',
            jobTitle: 'Product Manager',
            address: '123 Elm Street, NY 10001',
            phone: '(555)-123-4567',
            email: 'example2@gmail.com',
            themeColor: "#66ff66",
            summary: 'Experienced Product Manager with a track record of leading successful projects and managing cross-functional teams.',
            experience: [
                {
                    id: 1,
                    title: 'Product Manager',
                    companyName: 'Microsoft',
                    city: 'Redmond',
                    state: 'WA',
                    startDate: 'Feb 2020',
                    endDate: '',
                    currentlyWorking: true,
                    workSummary: 'Led the development of a new product line from concept to launch. Managed product roadmaps, coordinated with engineering and design teams, and conducted market research.'
                },
                {
                    id: 2,
                    title: 'Associate Product Manager',
                    companyName: 'Apple',
                    city: 'Cupertino',
                    state: 'CA',
                    startDate: 'Jul 2018',
                    endDate: 'Jan 2020',
                    currentlyWorking: false,
                    workSummary: 'Supported product managers in developing product specifications, coordinating with development teams, and analyzing user feedback to drive product improvements.'
                }
            ],
            education: [
                {
                    id: 1,
                    universityName: 'Stanford University',
                    startDate: 'Sep 2015',
                    endDate: 'Jun 2017',
                    degree: 'MBA',
                    major: 'Business Administration',
                    description: 'Graduated with honors, focusing on product management and strategy.'
                }
            ],
            skills: [
                {
                    id: 1,
                    name: 'Project Management',
                    rating: 90,
                },
                {
                    id: 2,
                    name: 'Strategic Planning',
                    rating: 85,
                }
            ]
        }),
        userEmail: 'anuragkashyap026@gmail.com'
    },
    { 
        id: 3, 
        title: 'Data Scientist Resume', 
        createdAt: '2024-08-15', 
        content: JSON.stringify({
            firstName: 'Bob',
            lastName: 'Johnson',
            jobTitle: 'Data Scientist',
            address: '456 Maple Avenue, CA 90001',
            phone: '(555)-987-6543',
            email: 'example3@gmail.com',
            themeColor: "#6666ff",
            summary: 'Data Scientist with expertise in statistical analysis, machine learning, and data visualization.',
            experience: [
                {
                    id: 1,
                    title: 'Data Scientist',
                    companyName: 'Facebook',
                    city: 'Menlo Park',
                    state: 'CA',
                    startDate: 'Mar 2019',
                    endDate: '',
                    currentlyWorking: true,
                    workSummary: 'Developed predictive models and algorithms for data analysis. Collaborated with engineering teams to deploy models and analyze performance metrics.'
                },
                {
                    id: 2,
                    title: 'Junior Data Scientist',
                    companyName: 'LinkedIn',
                    city: 'Sunnyvale',
                    state: 'CA',
                    startDate: 'Aug 2017',
                    endDate: 'Feb 2019',
                    currentlyWorking: false,
                    workSummary: 'Assisted in building data pipelines and conducting exploratory data analysis. Created visualizations and reports to support decision-making.'
                }
            ],
            education: [
                {
                    id: 1,
                    universityName: 'MIT',
                    startDate: 'Sep 2013',
                    endDate: 'Jun 2017',
                    degree: 'PhD',
                    major: 'Computer Science',
                    description: 'Focus on machine learning and data analysis.'
                }
            ],
            skills: [
                {
                    id: 1,
                    name: 'Python',
                    rating: 95,
                },
                {
                    id: 2,
                    name: 'SQL',
                    rating: 90,
                },
                {
                    id: 3,
                    name: 'Machine Learning',
                    rating: 85,
                }
            ]
        }),
        userEmail: 'anuragkashyap026@gmail.com'
    },
    { 
        id: 4, 
        title: 'UX Designer Resume', 
        createdAt: '2024-07-30', 
        content: JSON.stringify({
            firstName: 'Emily',
            lastName: 'Davis',
            jobTitle: 'UX Designer',
            address: '789 Oak Street, TX 75001',
            phone: '(555)-555-5555',
            email: 'example4@gmail.com',
            themeColor: "#ffcc66",
            summary: 'UX Designer with experience in creating user-centered designs for web and mobile applications.',
            experience: [
                {
                    id: 1,
                    title: 'Senior UX Designer',
                    companyName: 'Adobe',
                    city: 'San Jose',
                    state: 'CA',
                    startDate: 'Jan 2018',
                    endDate: '',
                    currentlyWorking: true,
                    workSummary: 'Led design efforts for a suite of products. Conducted user research, created wireframes and prototypes, and collaborated with developers to implement designs.'
                },
                {
                    id: 2,
                    title: 'UX Designer',
                    companyName: 'Yahoo',
                    city: 'Sunnyvale',
                    state: 'CA',
                    startDate: 'Jun 2015',
                    endDate: 'Dec 2017',
                    currentlyWorking: false,
                    workSummary: 'Worked on designing user interfaces for various web applications. Performed usability testing and iterated on designs based on feedback.'
                }
            ],
            education: [
                {
                    id: 1,
                    universityName: 'California College of the Arts',
                    startDate: 'Sep 2011',
                    endDate: 'Jun 2015',
                    degree: 'Bachelor',
                    major: 'Graphic Design',
                    description: 'Focused on user experience design and interaction design.'
                }
            ],
            skills: [
                {
                    id: 1,
                    name: 'Sketch',
                    rating: 90,
                },
                {
                    id: 2,
                    name: 'Adobe XD',
                    rating: 85,
                },
                {
                    id: 3,
                    name: 'Figma',
                    rating: 80,
                }
            ]
        }),
        userEmail: 'anuragkashyap026@gmail.com'
    }
];

// Helper function to simulate network delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Function to create a new resume
const CreateNewResume = async (data) => {
    await delay(500); // Simulate network delay
    const newResume = { 
        id: data.id, 
        createdAt: new Date().toISOString().split('T')[0],
        ...data.data
    };
    dummyResumes.push(newResume);
    return { data: newResume };
};



const GetUserResumes = async (userEmail) => {
    await delay(500); // Simulate network delay
    const userResumes = dummyResumes.filter(resume => resume.userEmail === userEmail);
    return { data: userResumes };
};

const UpdateResumeDetail = async (id, data) => {
    await delay(500); // Simulate network delay
    const resumeIndex = dummyResumes.findIndex(resume => resume.id === id);
    if (resumeIndex !== -1) {
        dummyResumes[resumeIndex] = { ...dummyResumes[resumeIndex], ...data };
        return { data: dummyResumes[resumeIndex] };
    } else {
        throw new Error("Resume not found");
    }
};

const GetResumeById = async (id) => {
    await delay(500); // Simulate network delay
    const resume = dummyResumes.find(resume => resume.id === id);
    if (resume) {
        return { data: resume };
    } else {
        throw new Error("Resume not found");
    }
};

const DeleteResumeById = async (id) => {
    await delay(500); // Simulate network delay
    const resumeIndex = dummyResumes.findIndex(resume => resume.id === id);
    if (resumeIndex !== -1) {
        const deletedResume = dummyResumes.splice(resumeIndex, 1);
        return { data: deletedResume[0] };
    } else {
        throw new Error("Resume not found");
    }
};

export default {
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
};
