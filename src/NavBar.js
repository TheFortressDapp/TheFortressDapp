import React from "react";
import { Box,  Flex, Image, Link, Spacer} from "@chakra-ui/react";
import Discord from "./assets/social-media-icons/discord_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import { Link as Links, NavLink, Router } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';






const NavBar = ({ accounts, setAccounts }) => {


    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts);
        }
    }



    return (

        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            
            
                <Navbar.Brand>
                    <Flex justify="space-between" align="center" paddingLeft="30px">

                        <Flex justify="space-around" width="30%" marginInlineStart="30px">

                            <Link href="https://twitter.com/thefortressnft">
                                <Image src={Twitter} boxSize="42px" margin="0 20px" />
                            </Link>
                            <Link href="http://www.discord.com">
                                <Image src={Discord} boxSize="42px" margin="0 20px" />
                            </Link>
                            <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                <Image src={Email} boxSize="42px" marginLeft="20px" />
                            </Link>
                        </Flex>
                    </Flex>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" >
                <Flex className="navbar" justify="center">
                    <Nav>
                    
                    

                            <NavLink exact to="/" style={{ color: 'white', textDecoration: 'none' }} ><Box margin="0 15px" paddingTop={"15"}
                            >Home</Box></NavLink>
                            <Spacer />
                            <NavLink exact to="/about" style={{ color: 'white', textDecoration: 'none' }}><Box margin="0 15px" paddingTop={"15"}>About</Box> </NavLink>
                            <Spacer />
                            <NavLink exact to="/roadmap" style={{ color: 'white', textDecoration: 'none' }}><Box margin="0 15px" paddingTop={"15"}>Roadmap</Box> </NavLink>
                            <Spacer />
                            <NavLink exact to="/team" style={{ color: 'white', textDecoration: 'none' }}><Box margin="0 15px" paddingTop={"15"}>Team</Box> </NavLink>
                            <Spacer />
                            <NavLink exact to="/fort" style={{ color: 'white', textDecoration: 'none' }}><Box margin="0 15px" paddingTop={"15"}>Fort</Box> </NavLink>
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
                                    margin="0 15px">Connected</Box>
                            ) : (
                                <Box
                                    backgroundColor="#4267B3"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #F0F0F"
                                    color="white"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    margin="0 15px"
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