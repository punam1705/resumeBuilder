// import React, { useContext } from 'react'
// import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
// import './theme2.css'
// import ResumeContext from '../../Context/ResumeContext';

// const Theme2 = (props) => {
//     const { componentRef, themeData } = props;
//     const { name, address, phone, email, profile, profileImage, summary, skill } = themeData.personalData;

//     const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
//     const { projectTitles, projectDesc } = themeData.projectData;
//     const { educationTitles, educationDesc } = themeData.educationData;
//     const { workTitles, workDesc } = themeData.workData;
//     const { awards } = themeData.awardData;


//     return (
//         <Box id="section-to-print" ref={componentRef}>
//             <Box id="theme2">
//                 <header id='info' className='text-center m-2 d-flex justify-content-between align-items-center'>
//                     <Box className='info-text text-start'>
//                         <Heading as='h2' size='xl' className='mb-2'>
//                             {name}
//                         </Heading>
//                         <Text fontWeight={'500'} fontSize='xl' className='mt-1 mb-2'>
//                             {profile}
//                         </Text>
//                         <Text width={'400px'} fontSize='sm' className='mt-1 mb-2 summary-text'>
//                             {summary}
//                         </Text>
//                     </Box>
//                     <Box className='mx-2 mb-2'>
//                         <Image id='resume-avatar' borderRadius={100} boxSize={'150px'} src={profileImage} alt='Profile Picture' />
//                     </Box>
//                 </header>
//                 <div className="w-100 border border-dark m-auto"></div>
//                 <section className='bottom-part d-flex mt-3'>
//                     <section className='partition-1'>
//                         <Box>
//                             <Heading fontSize='2xl' className='my-2'>Contact</Heading>
//                             <Box className='mt-3'>
//                                 <Heading fontSize='md' className='my-2'>Phone</Heading>
//                                 <Text fontSize={'sm'}>{phone}</Text>
//                                 <Heading fontSize='md' className='my-2'>Email</Heading>
//                                 <Text fontSize={'sm'}>{email}</Text>
//                                 <Heading fontSize='md' className='my-2'>Address</Heading>
//                                 <Text width={'190px'} fontSize={'sm'}>{address}</Text>
//                             </Box>
//                         </Box>
//                         <Box className='mt-5'>
//                             <Heading fontSize='2xl' className='my-2'>Skills</Heading>
//                             <Box className='mt-3'>
//                                 {
//                                     skill.split(',').map((item, index) => {
//                                         return (
//                                             <div key={index}>
//                                                 <Badge className='mx-1' key={index}>{item}</Badge><br />
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </Box>
//                         </Box>
//                     </section>

//                     <div style={{ height: '536px' }} className="border border-dark mx-4"></div>

//                     <section className='partition-2'>

//                         <Box id='education-area'>
//                             <Heading fontSize='2xl' className='my-2'>Education</Heading>
//                             {
//                                 Object.entries(educationTitles).map((element, index) => {
//                                     return (
//                                         <Box key={index} className="mt-3">
//                                             <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
//                                             <Box className='sub-details'>
//                                                 {
//                                                     (Object.entries(educationDesc)[index] === undefined)
//                                                         ?
//                                                         null
//                                                         :
//                                                         Object.entries(educationDesc)[index][1].split(',').map((element, index) => {
//                                                             return <li key={index}>{element}</li>
//                                                         })
//                                                 }
//                                             </Box>
//                                         </Box>
//                                     )
//                                 })
//                             }
//                         </Box>

//                         {
//                             !checkProj &&
//                             <Box id='project-area'>
//                                 <Heading fontSize='2xl' className='mt-4'>Projects</Heading>
//                                 {
//                                     Object.entries(projectTitles).map((element, index) => {
//                                         return (
//                                             <Box key={index} className="mt-1">
//                                                 <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
//                                                 <Box className='sub-details'>
//                                                     {
//                                                         (Object.entries(projectDesc)[index] === undefined)
//                                                             ?
//                                                             null
//                                                             :
//                                                             Object.entries(projectDesc)[index][1].split(',').map((element, index) => {
//                                                                 return <li key={index}>{element}</li>
//                                                             })
//                                                     }
//                                                 </Box>
//                                             </Box>
//                                         )
//                                     })
//                                 }
//                             </Box>
//                         }
//                         {
//                             !checkWork &&
//                             <Box id='experience-area'>
//                                 <Heading fontSize='2xl' className='mt-4'>Work Experience</Heading>
//                                 {
//                                     Object.entries(workTitles).map((element, index) => {
//                                         return (
//                                             <Box key={index} className="mt-1">
//                                                 <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
//                                                 <Box className='sub-details'>
//                                                     {
//                                                         (Object.entries(workDesc)[index] === undefined)
//                                                             ?
//                                                             null
//                                                             :
//                                                             Object.entries(workDesc)[index][1].split(',').map((element, index) => {
//                                                                 return <li key={index}>{element}</li>
//                                                             })
//                                                     }
//                                                 </Box>
//                                             </Box>
//                                         )
//                                     })
//                                 }
//                             </Box>
//                         }
//                         {
//                             !checkAward &&
//                             <Box id='award-area'>
//                                 <Heading fontSize='2xl' className='mt-4'>Awards & Achievement</Heading>
//                                 <Box className='mt-1'>
//                                     {
//                                         awards.split(',').map((element, index) => {
//                                             return <li key={index}>{element}</li>
//                                         })
//                                     }
//                                 </Box>
//                             </Box>
//                         }

//                     </section>
//                 </section>
//             </Box>
//         </Box>
//     )
// }

// export default Theme2

// import React, { useContext, useEffect, useState } from 'react';
// import './userCollectData.css';
// import { IoMdCloudUpload } from 'react-icons/io';
// import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react';
// import ResumeContext from '../../Context/ResumeContext';

// const UserDataCollect = () => {
//     const { themeData, setThemeData, checkAward, setCheckAward, checkProj, setCheckProj, checkWork, setCheckWork } = useContext(ResumeContext);
    
//     const [personalData, setPersonalData] = useState({
//         profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
//         name: "Your Name",
//         summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         profile: "Work Profile",
//         address: "Address Line",
//         phone: "Phone Number",
//         email: "Email Address",
//         skill: 'Your, Skills, are, shown, here'
//     });
    
//     const [projectData, setProjectData] = useState([]);
//     const [educationData, setEducationData] = useState([]);
//     const [workData, setWorkData] = useState([]);
//     const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' });

//     // Handle Personal Details
//     const handleChangePersonal = (e) => {
//         const { name, value, files } = e.target;
//         setPersonalData({ ...personalData, [name]: files ? URL.createObjectURL(files[0]) : value });
//     };

//     // Handle Dynamic Sections (Projects, Education, Work)
//     const handleAddEntry = (section, setSection) => {
//         setSection(prev => [...prev, { title: '', description: '' }]);
//     };

//     const handleChangeEntry = (index, field, value, section, setSection) => {
//         const updatedEntries = section.map((entry, i) => (
//             i === index ? { ...entry, [field]: value } : entry
//         ));
//         setSection(updatedEntries);
//     };

//     // Handle Awards
//     const handleChangeAwards = (e) => {
//         setAwardData({ awards: e.target.value });
//     };

//     // Update Global Theme Data
//     useEffect(() => {
//         setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData });
//     }, [personalData, projectData, educationData, workData, awardData]);

//     return (
//         <div id="form-collect">
//             {/* Personal Details */}
//             <div className='form-section'>
//                 <Heading size='md'>Personal Details</Heading>
//                 <hr />
//                 <FormControl className='my-2'>
//                     <label htmlFor='input-file'>
//                         <IoMdCloudUpload size={30} /> Select a file
//                     </label>
//                     <input accept='image/*' name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
//                     <img src={personalData.profileImage} alt='Profile Preview' />
//                 </FormControl>
//                 {['name', 'summary', 'profile', 'address', 'phone', 'email', 'skill'].map(field => (
//                     <FormControl key={field} className='my-2'>
//                         <Input name={field} onChange={handleChangePersonal} placeholder={field.replace(/([A-Z])/g, ' $1')} />
//                     </FormControl>
//                 ))}
//             </div>

//             {/* Education Section */}
//             <div className='form-section'>
//                 <Heading size='md'>Education</Heading>
//                 <hr />
//                 <Button onClick={() => handleAddEntry(educationData, setEducationData)}>Add Education</Button>
//                 {educationData.map((edu, index) => (
//                     <div key={index}>
//                         <Input placeholder='Title' onChange={(e) => handleChangeEntry(index, 'title', e.target.value, educationData, setEducationData)} />
//                         <Textarea placeholder='Description' onChange={(e) => handleChangeEntry(index, 'description', e.target.value, educationData, setEducationData)} />
//                     </div>
//                 ))}
//             </div>

//             {/* Projects Section */}
//             <div className='form-section'>
//                 <Heading size='md'>Projects</Heading>
//                 <Switch isChecked={!checkProj} onChange={() => setCheckProj(!checkProj)} />
//                 <hr />
//                 <Button disabled={checkProj} onClick={() => handleAddEntry(projectData, setProjectData)}>Add Project</Button>
//                 {projectData.map((proj, index) => (
//                     <div key={index}>
//                         <Input placeholder='Title' disabled={checkProj} onChange={(e) => handleChangeEntry(index, 'title', e.target.value, projectData, setProjectData)} />
//                         <Textarea placeholder='Description' disabled={checkProj} onChange={(e) => handleChangeEntry(index, 'description', e.target.value, projectData, setProjectData)} />
//                     </div>
//                 ))}
//             </div>

//             {/* Work Experience Section */}
//             <div className='form-section'>
//                 <Heading size='md'>Work Experience</Heading>
//                 <Switch isChecked={!checkWork} onChange={() => setCheckWork(!checkWork)} />
//                 <hr />
//                 <Button disabled={checkWork} onClick={() => handleAddEntry(workData, setWorkData)}>Add Experience</Button>
//                 {workData.map((work, index) => (
//                     <div key={index}>
//                         <Input placeholder='Title' disabled={checkWork} onChange={(e) => handleChangeEntry(index, 'title', e.target.value, workData, setWorkData)} />
//                         <Textarea placeholder='Description' disabled={checkWork} onChange={(e) => handleChangeEntry(index, 'description', e.target.value, workData, setWorkData)} />
//                     </div>
//                 ))}
//             </div>

//             {/* Awards Section */}
//             <div className='form-section'>
//                 <Heading size='md'>Awards & Achievement</Heading>
//                 <Switch isChecked={!checkAward} onChange={() => setCheckAward(!checkAward)} />
//                 <hr />
//                 <Textarea name='awards' disabled={checkAward} onChange={handleChangeAwards} placeholder='Use comma to separate awards' />
//             </div>
//         </div>
//     );
// };

// export default UserDataCollect;

import React from "react";
import "./Resume.css";
// import profilePic from "./profile.jpg"; // Add profile picture in the public folder

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="header-left">
          <h1>WOLF GUPTA</h1>
          <p>B.Tech, Information Technology | Looking for full-time opportunities</p>
          <p>
            📧 anjanik012@gmail.com | 📞 +91-8294234834 | 🔗
            <a href="https://linkedin.com/in/anjanik012">linkedin.com/in/anjanik012</a>
            | 🐙 <a href="https://github.com/anjanik012">github.com/anjanik012</a>
          </p>
        </div>
        <div className="header-right">
          {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
        </div>
      </header>
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="education">
          <h3>B.Tech, CSE</h3>
          <p>Birsa Institute of Technology, Sindri (2018 - 2022)</p>
          <p>📍 Dhanbad, India | CGPA: 7.84</p>
        </div>
        <div className="education">
          <h3>Senior Secondary - XII</h3>
          <p>DAV Public School, Hehal (2015 - 2017)</p>
          <p>📍 Ranchi, India | Percentage: 80%</p>
        </div>
        <div className="education">
          <h3>Secondary School - X</h3>
          <p>DAV Public School, Hehal (2015)</p>
          <p>📍 Ranchi, India | CGPA: 9.2</p>
        </div>
      </section>
      <section className="resume-section">
        <h2>EXPERIENCE</h2>
        <div className="experience">
          <h3>Google Summer of Code 2021 - Developer</h3>
          <p>The KDE Community | June 7 - Aug 23, 2021 | Work from Home</p>
          <ul>
            <li>Port outdated code to use new Qt6 framework</li>
            <li>Write new unit tests and do regression testing</li>
            <li>Technologies: C++14, Qt, CMake, Git</li>
          </ul>
        </div>
      </section>
      <section className="resume-section">
        <h2>PROJECTS</h2>
        <div className="project">
          <h3>Suto</h3>
          <p>Super-user authentication for Linux with Android companion app</p>
          <ul>
            <li>Uses PAM API for authentication</li>
            <li>Written in C++ using Boost ASIO networking</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
