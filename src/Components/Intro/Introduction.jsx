import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import   './introduction.css';
import homeLogo from './../../Assets/resume3.avif'
import hero from './../../Assets/6.webp'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import { BsStars } from "react-icons/bs";
import { BiSolidComponent } from "react-icons/bi";

import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }
    
    
      const styles = {
        aboutPage: {
          background: "#000",
        },
        aboutPageWrap: {
          position: "relative",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          height: "100vh",
          background: "url('./../../Assets/6.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
        apwNew: {
          background: "linear-gradient(transparent, #eeeeee32)",
          border: "1px solid #eeeeee62",
          borderRadius: "100px",
          padding: ".54em 1rem",
          fontSize: ".8rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        },
        apwHeading: {
          fontSize: "3.4rem",
          background: "linear-gradient(#fff, #ffe29d)",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          fontFamily: "afr",
        },
        apwPara: {
          color: "#ddd",
          width: "50%",
          textAlign: "center",
          fontSize: ".9rem",
        },
      }

    return (
        <>
            {/* <div className={styles.aboutPage}>
      
      <div className={styles.aboutPageWrap}>
        <div className={styles.apwNew}>
          <BsStars /> We are simply the best!
        </div>
        <div className={styles.apwHeading}>About IETE!</div>
        <div className={styles.apwPara}>
          The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognized professional society devoted to the advancement of science and technology in Electronics, Telecommunication & IT, founded in 1953.
        </div>
      </div>

     
    </div>  */}



{/* <Image src={hero} alt='home logo' my={'4'} /> */}
    <div style={styles.aboutPage}>
      <div style={styles.aboutPageWrap}>
      <Image src={hero} alt='home logo' my={'-500'} />
        <div style={styles.apwNew}>
          <BsStars /> Make an impression that lasts!
        </div>
        <div style={styles.apwHeading}>IETE Students' Forum!</div>
        <div style={styles.apwPara}>
        Your resume is your personal marketing tool, and we’re here to help you make it shine. With our intuitive platform, you can easily create a polished resume that showcases your talents and achievements. Whether you're starting fresh or refining your existing resume, we provide all the tools you need to stand out in a competitive job market. Make your next career move with confidence.
        </div>
      </div>
    </div>
  


              
                                  
                       {/* <h1 style={{  background: 'linear-gradient(to right, #000000, #8A2BE2, #1E90FF)', // Black to Violet to Blue gradient
                                    WebkitBackgroundClip: 'text', // Make the background clip to the text
                                    color: 'transparent', // Make the text color transparent to show the gradient
                                    fontSize: '60px', // Adjust font size as needed
                                    fontWeight: 'bold', }}>
                                  IETE-SF
                                    </h1> */}


<svg width="100%" height="100">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="50%" stopColor="#6A0DAD" />
      <stop offset="90%" stopColor="#0000FF" />
      <stop offset="0%" stopColor="000000" />
    </linearGradient>
  </defs>
  <text x="50%" y="90" fontSize="90" fontWeight="bold" textAnchor="middle" fill="url(#gradient)">
    Resume Builder
  </text>
</svg>

                                  
            <Helmet>
                <title>Resume Builder - Create Your Resume in Minutes</title>
                <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
                <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Hardik Desai" />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                <meta property="og:url" content="https://quick-resume.netlify.app/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'} bg={'#000'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>

                    {
                        selectBtn
                            ?
                            <>
                           
                                <Heading
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                    lineHeight={'110%'}>
                                    Your Next Best Hire {' '}
                                    <Text as={'span'} color={'#8A2BE2'}>
                                        Starts {' '}
                                    </Text>
                                    Here
                                </Heading>

                                <Text color={'gray.500'} maxW={'3xl'}>
                                🚀 Build Your Perfect Resume – Effortlessly & Professionally!
                                A resume builder is your shortcut to a polished, professional resume in just a few clicks! With multiple templates and smart formatting, you can create a standout resume that aligns with your career goals.
                                </Text>

                                <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                    <Box className='Bullet_Points'>
                                        <Button>1</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Select a template from our collection.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>2</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Build you resume using our easy to use resume builder.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>3</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Download your resume.
                                        </Text>
                                    </Box>
                                </Flex>
                            </>
                            :
                            <Heading
                                m={'1.5'}
                                textAlign={{ base: 'center', md: 'start' }}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Select a {' '}
                                <Text as={'span'} color={'#8A2BE2'}>
                                    Template {' '}
                                </Text>
                                from the list
                            </Heading>
                    }
                </Stack>

                {
                    selectBtn ?
                        <Stack>
                            <Image src={homeLogo} alt='home logo' my={'4'} />
                            <Button
                                onClick={handleSelectTemplate}
                                rounded={'full'}
                                px={6}
                                className='mb-4'
                                colorScheme={'teal'}
                                bg={'#8A2BE2'}
                                _hover={{ bg: '#8A2BE2' }}>
                                Select Template
                            </Button>
                        </Stack>
                        :
                        <>
                            <Box maxW={{ base: '100%', md: '40%' }} className="templatesList">
                                {
                                    ThemeTemplateData.map((item, index) => {
                                        return <div key={index} className="template" onClick={showTheme}>
                                            <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                        </div>
                                    })
                                }
                            </Box>
                        </>
                }
            </Container>
        </>

    );
}
