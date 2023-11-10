"use client";
import React, {useEffect, useState} from 'react'
import './page.css'
import { 
  Typography, 
  Stack, 
  Button,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionGroup,}
  from '@mui/joy'

import { Carousel } from 'react-bootstrap';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { useMediaQuery } from '@uidotdev/usehooks';
import Image from 'next/image';

export default function Home() {

  //media query
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");


  //button states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  }

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  }

  //components

  const Cyberplug = () => {
    const level = isMobile ? "h3" : "h1";
    const size = isMobile? 32:48;
    return (
      <div className='no-select pointer' style={{display:"flex"}}>
        <Image src="/plug.svg" width={size} height={size} style={{ transform: "rotate(-90deg)" }} alt="icon" />
        <Typography level={level} textColor={"#fff"}>yberplug</Typography>
      </div>
    )
  }

  const NavLinks = () => {
    return(
      <React.Fragment>
        <div className="nav-button-group">
                <Stack direction={"row"} spacing={3}>
                  <div className='nav-button no-select' onClick={toggleAbout}>
                    <Typography textColor={"#fff"} >About</Typography>
                    {isAboutOpen? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                  </div>
                  <div className='nav-button no-select' onClick={toggleServices}>
                    <Typography textColor={"#fff"} >Services</Typography>
                    {isServicesOpen? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                  </div>
                  <div className='nav-button no-select'>
                    <Typography textColor={"#fff"}>Pricing</Typography>
                  </div>
                  <div className='nav-button no-select'>
                    <Typography textColor={"#fff"}>Support</Typography>
                  </div>
                </Stack>
              </div>
      </React.Fragment>
    )
  }

  const Contact = () => {
    return(
      <React.Fragment>
        <Stack direction={"row"} spacing={1}>
        <Button variant={"soft"} sx={{whiteSpace:"nowrap"}}>
          <LocalPhoneIcon/>
          {!isMobile && <span>+1 909 963 2559</span>}
        </Button>

        </Stack>
      </React.Fragment>
    )
  }

  //page TSX
  return (
    <React.Fragment>
      <nav>
        {isMobile ? (
          <>
            <Cyberplug/>
            <div className="nav-mobile-group">
              <Stack direction={"row"} spacing={2} marginRight={"0.5em"}>
                <Contact/>
                <MenuIcon fontSize='large' sx={{alignSelf:"center"}}/>
              </Stack>
            </div>
          </>
        ):(
          <>
            {isTablet ? (
              <>
                <Cyberplug/>
                <div className="nav-mobile-group">
                  <Stack direction={"row"} spacing={2} marginRight={"0.5em"}>
                    <Contact/>
                    <Divider orientation="vertical"/>
                    <MenuIcon fontSize='large' sx={{alignSelf:"center"}}/>
                  </Stack>
                </div>
              </>
            ):(
              <>
                <Cyberplug/>
                <NavLinks/>
                <Contact/>  
              </>
            )}
        </>
        )}
      </nav>
      <main className="main">        
        <Carousel pause={false}>
          <Carousel.Item interval={5000}>
            <img className="carousel-img" src="/software.jpg" alt='pic'/>
            <Carousel.Caption>
              <Typography level='h3' textColor={"#fff"}>Software Development</Typography>
              {/*
              <p>Crafting tailored software solutions to meet your unique business needs, from desktop applications to enterprise-level systems.</p>
              */}
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <img className="carousel-img" src="/web.jpg" alt='pic'/>
            <Carousel.Caption>
            <Typography level='h3' textColor={"#fff"}>Web Development</Typography>
              {/*
              <p>Building dynamic and user-friendly websites that enhance your online presence, ensuring seamless user experiences across all devices.</p>
              */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <img className="carousel-img" src="/mobile.jpg" alt='pic'/>
            <Carousel.Caption>
            <Typography level='h3' textColor={"#fff"}>Mobile App Development</Typography>
              {/*}
              <p>Creating cutting-edge mobile applications for iOS and Android platforms, combining intuitive design with powerful functionality for optimal user engagement.</p>
            */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <AccordionGroup size='lg' variant='soft' transition="0.25s ease">
          <Accordion>
            <AccordionSummary><b>Will you work on our project from dream to reality?</b></AccordionSummary>
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
              We have fixed plans and hourly plans. Fixed plans work well for well-defined, small projects. After collecting your requirements, we can negotiate a fixed price. Larger or complex projects more prone to change, fit best with our hourly rate of $45/hr.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary><b>What is your post-deployment policy?</b></AccordionSummary>
            <AccordionDetails>
              After a project has been completed, we will provide free support and maintenance for up to 90 days. Upon further agreement, we can provide further support and maintenance. 
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </main>
      <footer>
        <Cyberplug/>
        <div className='footer-flex'>
          <div className='footer-flex-group'>
            <a href='#'><Typography level="h4" textColor={"#fff"}>Contact</Typography></a>
            <Divider/>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Phone: +1 909 963 2559</Typography></a>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Email: contact@cyberplug.net</Typography></a>
          </div>
          <div className='footer-flex-group'>
            <a href='#'><Typography level="h4" textColor={"#fff"}>About</Typography></a>
            <Divider/>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Why Cyberplug</Typography></a>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Who we serve</Typography></a>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Portfolio</Typography></a>
          </div>
          <div className='footer-flex-group'>
            <a href='#'><Typography level="h4" textColor={"#fff"}>Services</Typography></a>
            <Divider/>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Software Development</Typography></a>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Web Development</Typography></a>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Mobile App Development</Typography></a>
          </div>
          <div className='footer-flex-group'>
            <a href='#'><Typography level="h4" textColor={"#fff"}>Legal</Typography></a>
            <Divider/>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Terms of Use</Typography></a>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>Privacy Policy</Typography></a>
          </div>
          <div className='footer-flex-group'>
            <a href='#'><Typography level="body-sm" textColor={"#fff"}>&#169; {new Date().getFullYear()} Cyberplug LLC</Typography></a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
