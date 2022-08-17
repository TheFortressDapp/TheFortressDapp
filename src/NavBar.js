import React from "react";
import { useState } from "react";
import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Discord from "./assets/social-media-icons/discord_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import { Link as Links, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./assets/Logo/The_Fortress_Logo_Clear.png";
import { useMediaQuery } from "@chakra-ui/react";



const NavBar = ({ accounts, setAccounts }) => {


    const isConnected = Boolean(accounts[0]);

    const [expanded, setExpanded] = useState(false);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const scrollTo = (id) => {
        let element = document.getElementById(id);


        element.scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline:'nearest'
            
        })
    }




    return (


        <Navbar className="navbar" expanded={expanded} collapseOnSelect expand="lg" bg="black" variant="dark" >


            <Navbar.Brand>
                <Flex justify="space-between" align="center" paddingLeft="20px">

                    <Flex justify="space-around" width="30%" marginInlineStart="20px">

                        <Link href="https://twitter.com/thefortressnft">
                            <Image src={Logo} boxSize={isLargerThan768 ? "80px" : "50px"} margin="0 10px" />
                        </Link>

                    </Flex>
                </Flex>
            </Navbar.Brand>


            {/*<Navbar.Brand>
                <Flex justify="space-between" align="center" paddingLeft="20px">

                    <Flex justify="space-around" width="30%" marginInlineStart="20px">

                        <Link href="https://twitter.com/thefortressnft">
                            <Image src={Twitter} boxSize="42px" margin="0 20px" />
                        </Link>
                        {/* <Link href="http://www.discord.com">
                                <Image src={Discord} boxSize="42px" margin="0 20px" />
                            </Link> 
                        <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                            <Image src={Email} boxSize="42px" marginLeft="20px" />
                        </Link>
                    </Flex>
                </Flex>
    </Navbar.Brand> */}


            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" >
                <Flex className="navbar" justify="center">
                    <Nav>

                        <Link cursor="pointer" onClick={() => scrollTo('home') & setExpanded(false)} style={{ color: 'white', textDecoration: 'none' }}  ><Box fontSize="30" margin="15px" marginTop="15px" padding="5px">Home</Box></Link>
                        <Spacer />
                        <Link cursor="pointer" onClick={() => scrollTo('about') & setExpanded(false)} style={{ color: 'white', textDecoration: 'none' }} ><Box fontSize="30" margin="15px" padding="5px">About</Box></Link >
                        <Spacer />
                        <Link cursor="pointer" onClick={() => scrollTo('roadmap') & setExpanded(false)} style={{ color: 'white', textDecoration: 'none' }} ><Box fontSize="30" margin="15px" padding="5px">Roadmap</Box> </Link >
                        <Spacer />
                        <Link cursor="pointer" onClick={() => scrollTo('team') & setExpanded(false)} style={{ color: 'white', textDecoration: 'none' }}><Box fontSize="30" margin="15px" padding="5px">Team</Box> </Link >
                        <Spacer />
                        <Link cursor="pointer" onClick={() => scrollTo('fort') & setExpanded(false)} style={{ color: 'white', textDecoration: 'none' }}><Box fontSize="30" margin="15px" padding="5px">Fort</Box> </Link >
                        <Spacer />

                        {isConnected ? (
                            <Box
                                backgroundColor="#4267B3"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margin="10px"
                                fontSize="30px"
                            >Connected</Box>
                        ) : (
                            <Box
                                backgroundColor="#4267B3"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margin="10px"
                                fontSize="30px"
                                onClick={connectAccount}
                            > Connect </Box>
                        )}

                    </Nav>
                </Flex>
            </Navbar.Collapse>



        </Navbar>

    );
};

export default NavBar;