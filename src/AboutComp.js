import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Logo from "./assets/background/The_Fortress_Logo_Clear.png";
import Accordion from "./Components/Accordion";
import './App.css';


function AboutComp() {


    return (
        <Flex justify="center" align="top" height="70vh" paddingTop="30px" >

            <Box justify="center" width="1000px" >
                <div>
                    <Text fontSize="20px" textShadow="0 5px #000000" marginBottom='30'>
                        Our Story
                    </Text>

                    {/*<Text fontSize="24px" textShadow="0 5px #000000" marginTop="50">
                        The Problem
                    </Text>

                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        "Our need will be the real creator" - Plato
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        After our founder, Mer, got interested in NFTs, he quickly realized that there were no protections for new consumers like him who were entering this new world. If the founders did not execute, the holders would lose their investment. If the project got hacked, the holders would lose their investment. If the project got "pumped and dumped" by a third party, the holders would lose their investment and the list continues. So he decided to find a solution.
                    </Text>

                    <Text fontSize="24px" textShadow="0 5px #000000" marginTop="50">
                        The Solution
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        "Form follows function" - Louis H. Sullivan
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        At The Fortress, we are not about buzzwords or fancy graphics. The Fortress is a utility-driven project that seeks to give its holders peace of mind as they venture into the Metaverse. For every "The Fortress" NFT you own, you will have access to protect one of your third-party NFTs from our approved list.
                    </Text>*/}

                </div>
                
                <div>

                    <Accordion />

                </div>
            </Box>
        </Flex>

    )


}

export default AboutComp;