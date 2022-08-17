import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Accordion from "./Components/Accordion";
import './App.css';
import { useMediaQuery } from "@chakra-ui/react";


function AboutComp() {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


    return (
        <section id="about">

            <div>
                <Text fontSize="40px" textShadow="0 5px #000000" paddingTop="20" paddingBottom="15px" height="10vh">
                    Our Story
                </Text>

            </div>


            <Flex justify="center"  height={isLargerThan768 ? "90vh" : ""} paddingBottom="300" >


                <Box  >
                    <Accordion />

                </Box>

            </Flex>
        </section >

    )


}

export default AboutComp;