"use client";
import React, {useState} from 'react';
import './page.css';
import { 
  Typography, 
  Stack, 
  Button,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionGroup,
  Input,
  Textarea,
  Select,
  Option,
  Drawer,
}
  from '@mui/joy';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';


export default function Home() {

  const phoneNum = "+1 909 963 2559";

  //button states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleServices = () => {
    if(!isServicesOpen) {
      setIsAboutOpen(false);
    }
    setIsServicesOpen(!isServicesOpen);
  }

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAbout = () => {
    if(!isAboutOpen) {
      setIsServicesOpen(false);
    }
    setIsAboutOpen(!isAboutOpen);
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //components
  const Carousel = () => {
    return(
      <Swiper
          slidesPerView={1}
          slidesPerGroupSkip={0}
          spaceBetween={0}
          loop={true}
          speed={450}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          /*pagination={{
            clickable: true,
          }}*/
          navigation={true}
          modules={[/*Pagination,*/ Navigation, Autoplay]}
        >
          <SwiperSlide>
            <Image className='carousel-img' src="/software.jpg" alt="software" width={0} height={0} sizes="100vw"/>
            <div className='carousel-img-caption'>
              <Typography level='h3' textColor={"#fff"}>Standalone Software</Typography>
              <span className='show-not-mobile'><Typography level="body-md" textColor={"#fff"}>Custom software that runs on Windows, Linux, or Mac</Typography></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <Image className='carousel-img' src="/web.jpg" alt="web" width={0} height={0} sizes="100vw"/>
            <div className='carousel-img-caption'>
              <Typography level='h3' textColor={"#fff"}>Web Development</Typography>
              <span className='show-not-mobile'><Typography level="body-md" textColor={"#fff"}>Your very own website made just the way you imagined</Typography></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <Image className='carousel-img' src="/mobile.jpg" alt="mobile" width={0} height={0} sizes="100vw"/>
            <div className='carousel-img-caption'>
              <Typography level='h3' textColor={"#fff"}>Mobile Applications</Typography>
              <span className='show-not-mobile'><Typography level="body-md" textColor={"#fff"}>Go mobile with your very own app for iOS and Android</Typography></span>
            </div>
          </SwiperSlide>
        </Swiper>
      )
  }

  const StandaloneTools = () => {
    return (
      <div style={{width:"100%"}}>
        <Typography level="h4" textColor='#fff' sx={{marginLeft:"2em"}}>Standalone</Typography>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 55,
            stretch: 0,
            depth: 200,
            modifier: 0.5,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className='tool-swiper'
        >
          
          <SwiperSlide>
            <img className='tool-img' src="/logos/c++.svg" alt="c++" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/c-sharp.svg" alt="c#" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/java.svg" alt="java" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/python.svg" alt="python" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/qt.svg" alt="qt" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/unity.svg" alt="unity" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/pygame.svg" alt="pygame" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/sfml.svg" alt="sfml" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img className='tool-img' src="/logos/raylib.svg" alt="raylib" />
          </SwiperSlide>*/}
        </Swiper>
      </div>
    );
  }

  const WebTools = () => {
    return (
      <div style={{width:"100%"}}>
        <Typography level='h4' textColor='#fff' sx={{marginLeft:"2em"}}>Web</Typography>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 0.5,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className='tool-swiper'
        >
          <SwiperSlide>
            <img className='tool-img' src="/logos/html5.svg" alt="html" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/css3.svg" alt="css" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/javascript.svg" alt="js" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/react-js.svg" alt="react-js" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/next-js.svg" alt="next-js" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/vue-js.svg" alt="vue-js" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/flutter.svg" alt="flutter" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/dot-net.svg" alt="dot net" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }

  const MobileTools = () => {
    return (
      <div style={{width:"100%"}}>
        <Typography level='h4' textColor='#fff' sx={{marginLeft:"2em"}}>Mobile</Typography>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 0.5,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className='tool-swiper'
        >
          <SwiperSlide>
            <img className='tool-img' src="/logos/react-native.svg" alt="react native" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/flutter.svg" alt="flutter" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/ionic.svg" alt="ionic" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/unity.svg" alt="unity" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }

  const CloudTools = () => {
    return (
      <div style={{width:"100%"}}>
        <Typography level='h4' textColor='#fff' sx={{marginLeft:"2em"}}>Cloud</Typography>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 0.5,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className='tool-swiper'
        >
          <SwiperSlide>
            <img className='tool-img' src="/logos/aws.svg" alt="aws" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='tool-img' src="/logos/firebase.svg" alt="firebase" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }

  const ToolsSection = () => {
    return (
      <div className="tools-container">
        <Typography level='h1' textColor={"#1a6db0"}>Tools we use</Typography>
        <div className='tools-section'>
          <Typography level='body-lg' textColor={"#fff"} sx={{marginBottom:".5em"}}>We always make sure to choose the right tool for the job.</Typography>
          <StandaloneTools/>
          <WebTools/>
          <MobileTools/>
          <CloudTools/>
        </div>
      </div>
      
    )
  }
  

  //logo
  const Logo = () => {
    return (
      <div className='no-select pointer' style={{display:"flex", alignItems:"center"}}>
        <Image className='logo-pic' src="/plug.svg" alt="plug" width={0} height={0} sizes="100vw"/>
        <span className='logo-text'>yberplug</span>
      </div>
    )
  }

  //nav bar
  const Navbar = () => {
    return (
      <nav>
        <Logo/>
        <div className='nav-menu-group show-desktop-only'>
          <Stack direction={"row"} spacing={2}>
            <div className='no-select pointer' style={{display:"flex"}} onClick={toggleAbout}>
              <Typography textColor={"#fff"}>About</Typography>
              {isAboutOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
            <div className='no-select pointer' style={{display:"flex"}} onClick={toggleServices}>
              <Typography textColor={"#fff"}>Services</Typography>
              {isServicesOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
            <span className='no-select pointer'><Typography textColor={"#fff"}>Pricing</Typography></span>
            <span className='no-select pointer'><Typography textColor={"#fff"}>Support</Typography></span>
          </Stack>
          <div className='right-align'>
            <Button variant='soft'><LocalPhoneIcon sx={{marginRight:"0.5em"}}/>{phoneNum}</Button>
          </div>
        </div>
        <div className='nav-menu-group show-tablet-only'>
          <div className='right-align'>
            <Stack direction={"row"} spacing={2}>
              <Button variant='soft'><LocalPhoneIcon sx={{marginRight:"0.5em"}}/>{phoneNum}</Button>
              <span onClick={()=>setIsDrawerOpen(true)}><MenuIcon fontSize='large'/></span>
            </Stack>
          </div>
        </div>
        <div className='nav-menu-group show-mobile-only'>
          <div className='right-align'>
            <Stack direction={"row"} spacing={2}>
              <Button variant='soft'><LocalPhoneIcon/></Button>
              <span onClick={()=>setIsDrawerOpen(true)}><MenuIcon fontSize='large'/></span>
            </Stack>
          </div>
        </div>
      </nav>
    )
  }

  const ContactForm = () => {
    return(
      <div className='contact-form-container'>
        <Typography level='h1' textColor={"#1a6db0"}>What Are Your Goals?</Typography>
        <form className='contact-form-grid'>

          <div className='contact-form-field'>
            <Input placeholder='Name'/>
          </div>
          
          <div className='contact-form-field'>
            <Input placeholder='Email'/>
          </div>
          
          <div className='contact-form-field'>
            <Input placeholder='Phone'/>
          </div>

          <div className='contact-form-field'>
            <Input placeholder='Company'/>
          </div>

          <div className='contact-form-field'>
            <Select defaultValue={"standalone"}>
              <Option value={"standalone"}>Standalone Software</Option>
              <Option value={"web"}>Web Development</Option>
              <Option value={"mobile"}>Mobile App</Option>
            </Select>
          </div>

          <div className='contact-form-area'>
            <Textarea placeholder='Details' minRows={5.5}/>
          </div>

          <div className='contact-form-field'>
            <Button variant='solid'>Submit</Button>
          </div>
          
        </form>
      </div>
    )
  }

  const FAQS = () => {
    return (
      <div className='questions'>
        <Typography level='h1' textColor={"#1a6db0"}>FAQs</Typography>
        <AccordionGroup size='lg' variant='soft' transition="0.25s ease">
          <Accordion>
            <AccordionSummary><b>Will you work on my project from dream to reality?</b></AccordionSummary>
            <AccordionDetails>
              Of course! That is what we are here to do. Our IT professionals will cover requirement gathering, system design, coding, deployment, and maintenance.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary><b>How long will my project take?</b></AccordionSummary>
            <AccordionDetails>
              This can depend on a lot of factors such as how many features are required and how complex they are. A simple blogging website may be deployed in as little as 2 weeks, whereas a more complex, cross-platform mobile app may take 6 months.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary><b>How much does it cost?</b></AccordionSummary>
            <AccordionDetails>
              We provide our services at an our hourly rate of $45/hr. We can also negotiate a fixed price on a case-by-case basis.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary><b>What is your post-deployment policy?</b></AccordionSummary>
            <AccordionDetails>
              After a project has been completed, we will provide free support and maintenance for up to 90 days. Upon further agreement, we can provide further support and maintenance. 
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </div>
    )
  }

  const Footer = () => {
    return(
      <footer>
        <Logo/>
        <div className='footer-flex'>
          {
          <div className='footer-flex-group'>
            <Typography level="h4" textColor={"#fff"}>Contact</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Phone: <span>{phoneNum}</span></Typography>
            <Typography level="body-sm" textColor={"#fff"}>Email: contact@cyberplug.net</Typography>
          </div>
          }
          <div className='footer-flex-group'>
            <Typography level="h4" textColor={"#fff"}>About</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Why Cyberplug</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Who we serve</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Portfolio</Typography>
          </div>
          <div className='footer-flex-group'>
            <Typography level="h4" textColor={"#fff"}>Services</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Software Development</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Web Development</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Mobile App Development</Typography>
          </div>
          <div className='footer-flex-group'>
            <Typography level="h4" textColor={"#fff"}>Legal</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Terms of Use</Typography>
            <Typography level="body-sm" textColor={"#fff"}>Privacy Policy</Typography>
          </div>
          <div className='footer-flex-group last'>
            <Typography level="body-sm" textColor={"#fff"}>&#169; {new Date().getFullYear()} Cyberplug LLC</Typography>
          </div>
        </div>
      </footer>
    )
  }

  //page TSX
  return (
    <React.Fragment>
      <Navbar/>
      <Drawer open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} anchor='top' hideBackdrop={false} size='sm'>
        Test
      </Drawer>
      <main className="main">     
        <Carousel/>
        <div className='main-padded'>
          <ToolsSection/>
          <ContactForm/>
          <FAQS/>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  )
}
