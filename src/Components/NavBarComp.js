import React from "react";
import { Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Discord from "./assets/social-media-icons/discord_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import {Link as Links} from "react-router-dom"





function NavBarComp  () {

    
    

    return (
        <Flex justify= "space-between" align= "center" padding= "30px">

            <Flex justify= "space-around" width= "30%" padding= "30px">
                
                <Link href="https://twitter.com/thefortressnft">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="http://www.discord.com">
                    <Image src={Discord} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href="http://www.gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            <Flex
            justify="space-around"
            align="center"
            width="30%"
            padding="30px"
            paddingRight="30px"
            
            >
                
                
                
                
                <Links to="/"> <Box margin="0 15px">Home</Box> </Links>
                <Spacer />
                <Links to="/roadmap"> <Box margin="0 15px">Roadmap</Box> </Links>
                <Spacer />
                <Links to="/team"> <Box margin="0 15px">Team</Box> </Links>
                <Spacer />
                <Links to="/vault"> <Box margin="0 15px">Vault</Box> </Links>
                <Spacer />
                

            </Flex>
            

            
        </Flex>

    );
};

export default NavBarComp;