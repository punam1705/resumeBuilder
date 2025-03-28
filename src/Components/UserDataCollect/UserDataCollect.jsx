import React, { useContext, useEffect, useState } from 'react'
import './userCollectData.css'
import { IoMdCloudUpload } from 'react-icons/io'
import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react'
import ResumeContext from '../../Context/ResumeContext'
const UserDataCollect = () => {


    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext)


    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', })
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })
    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }
    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = projectData
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData })
        setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = projArrTemplate
        arr.push(template)
        setProjArrTemplate(arr)
        setProjectCount(i)
    }

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = educationData
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData)
    }
    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = educationArrTemplate
        arr.push(template)
        setEducationArrTemplate(arr)
        setEducationCount(i)
    }

    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        let tempWorkData = workData
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData({ ...workData }, tempWorkData)
    }
    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`wDescription${i}`} name='wDescription' onChange={handleChangeWork} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = workArrTemplate
        arr.push(template)
        setWorkArrTemplate(arr)
        setWorkCount(i)
    }

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target
        setAwardData({ ...awardData, [name]: value })
    }
    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData })
       
    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData])

    return (
        <>
            <div id="form-collect">
                {/* Personal Details Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>
                        Personal Details
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <div className='file'>
                            <label htmlFor='input-file'>
                                <i className="material-icons"><IoMdCloudUpload size={30} />
                                </i>Select a file
                            </label>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
                            <img className="blah" src={personalData.profileImage} alt="your profile preview" />
                        </div>
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='name' onChange={handleChangePersonal} type={'text'} placeholder='Your Name' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='summary' onChange={handleChangePersonal} type={'text'} placeholder='Your Summary' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='profile' onChange={handleChangePersonal} type={'text'} placeholder='Work Profile' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='address' onChange={handleChangePersonal} type={'text'} placeholder='Address' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='phone' onChange={handleChangePersonal} type={'tel'} placeholder='Phone number' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='email' onChange={handleChangePersonal} type={'email'} placeholder='Email id' />
                    </FormControl>
                </div>

                {/* Skills Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Technical Skills
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='skill' onChange={handleChangePersonal} type={'text'} placeholder='Separate skills by comma' />
                    </FormControl>
                </div>

                {/* Education Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Education
                    </Heading>
                    <hr />
                    <Button onClick={handleEducationClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Education</Button>
                    {
                        (educationCount > 0) ? educationArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Projects Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Projects
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckProj(!checkProj))} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkProj} onClick={handleProjectClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Projects</Button>
                    {
                        (projectCount > 0) ? projArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Work Experience Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Work Experience
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckWork(!checkWork))} colorScheme='teal' />
                    </div>
                    <hr />
                    <Button disabled={checkWork} onClick={handleWorkClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Experience</Button>
                    {
                        (workCount > 0) ? workArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Awards & Achievement  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Awards & Achievement
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckAward(!checkAward))} colorScheme='teal' />
                    </div>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Textarea name='awards' disabled={checkAward} onChange={handleChangeAwards} placeholder='Use comma to separate Achievement' />
                    </FormControl>
                </div>

            </div>
        </>
    )
}

export default UserDataCollect




// import React, { useContext, useEffect, useState } from 'react';
// import './UserDataCollect.css'; // External CSS file
// import { IoMdCloudUpload } from 'react-icons/io';
// import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react';
// import ResumeContext from '../../Context/ResumeContext';

// const UserDataCollect = () => {
//     const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext);

//     const [personalData, setPersonalData] = useState({
//         profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
//         name: 'Wolf Gupta',
//         profile: 'B.Tech, Information Technology',
//         email: 'anjanik012@gmail.com',
//         phone: '+91-8294234834',
//         linkedin: 'linkedin.com/in/anjanik012',
//         github: 'github.com/anjanik012',
//         address: 'Dhanbad, India',
//     });

//     const [educationData, setEducationData] = useState([
//         { degree: 'B.Tech, CSE', school: 'Birsa Institute of Technology, Sindri', year: '2018 - 2022', cgpa: '7.84' },
//         { degree: 'Senior Secondary - XII', school: 'DAV Public School, Hehal', year: '2015 - 2017', percentage: '80%' },
//         { degree: 'Secondary School - X', school: 'DAV Public School, Hehal', year: '2015', cgpa: '9.2' },
//     ]);

//     const [experienceData, setExperienceData] = useState([
//         { role: 'Google Summer of Code 2021 - Developer', company: 'The KDE Community', year: 'June - Aug 2021', description: 'Worked on digiKam photo management software. Ported outdated code to Qt6, wrote new unit tests, and fixed potential bugs.', tech: 'C++14, Qt, CMake, Git' },
//     ]);

//     const [skills, setSkills] = useState({
//         languages: 'C, C++, Java, Python, Rust, SQL, HTML/CSS',
//         frameworks: 'Boost C++, Qt, Make/CMake',
//         software: 'Photoshop, Blender, Graphics Designing',
//         subjects: 'Data Structures, Algorithms, Linux Programming, OOP',
//     });

//     const [projects, setProjects] = useState([
//         { name: 'Suto', description: 'Super-user authentication app for Linux with PAM API and ASIO networking.', tech: 'C++' },
//         { name: 'Suto Android', description: 'Android companion app for Suto, using biometrics and Java socket programming.', tech: 'Java, Android APIs' },
//     ]);

//     const [achievements, setAchievements] = useState([
//         'Rank 1 in CodeChef May Lunchtime 2021',
//         'Achieved Candidate Master in CodeForces',
//         'All India Rank 50 in International Mathematics Olympiad',
//     ]);

//     const [activities, setActivities] = useState([
//         { title: 'Secretary, Hackathon and Coding Club, BIT Sindri' },
//         { title: 'Sponsorship Head, LEO Club of BIT Sindri' },
//     ]);

//     return (
//         <div id="resume-form">
//             <div id="header">
//                 <img src={personalData.profileImage} alt="Profile" className="profile-image" />
//                 <div id="contact-info">
//                     <h1>{personalData.name}</h1>
//                     <p>{personalData.profile}</p>
//                     <p>Email: {personalData.email} | Phone: {personalData.phone}</p>
//                     <p>LinkedIn: {personalData.linkedin} | GitHub: {personalData.github}</p>
//                 </div>
//             </div>

//             <section id="education">
//                 <Heading size="md">EDUCATION</Heading>
//                 {educationData.map((edu, index) => (
//                     <div key={index} className="education-entry">
//                         <h3>{edu.degree}</h3>
//                         <p>{edu.school} | {edu.year}</p>
//                         {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
//                         {edu.percentage && <p>Percentage: {edu.percentage}</p>}
//                     </div>
//                 ))}
//             </section>

//             <section id="experience">
//                 <Heading size="md">EXPERIENCE</Heading>
//                 {experienceData.map((exp, index) => (
//                     <div key={index} className="experience-entry">
//                         <h3>{exp.role}</h3>
//                         <p>{exp.company} | {exp.year}</p>
//                         <p>{exp.description}</p>
//                         <p><strong>Technologies:</strong> {exp.tech}</p>
//                     </div>
//                 ))}
//             </section>

//             <section id="skills">
//                 <Heading size="md">SKILLS</Heading>
//                 <p><strong>Languages:</strong> {skills.languages}</p>
//                 <p><strong>Frameworks:</strong> {skills.frameworks}</p>
//                 <p><strong>Software:</strong> {skills.software}</p>
//                 <p><strong>Subjects:</strong> {skills.subjects}</p>
//             </section>

//             <section id="projects">
//                 <Heading size="md">PROJECTS</Heading>
//                 {projects.map((proj, index) => (
//                     <div key={index} className="project-entry">
//                         <h3>{proj.name}</h3>
//                         <p>{proj.description}</p>
//                         <p><strong>Technologies:</strong> {proj.tech}</p>
//                     </div>
//                 ))}
//             </section>

//             <section id="achievements">
//                 <Heading size="md">ACHIEVEMENTS</Heading>
//                 <ul>
//                     {achievements.map((ach, index) => <li key={index}>{ach}</li>)}
//                 </ul>
//             </section>

//             <section id="activities">
//                 <Heading size="md">ACTIVITIES</Heading>
//                 {activities.map((act, index) => (
//                     <div key={index} className="activity-entry">
//                         <h3>{act.title}</h3>
//                     </div>
//                 ))}
//             </section>
//         </div>
//     );
// };

// export default UserDataCollect;