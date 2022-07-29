import React from "react";
import { Box, Flex, Text} from "@chakra-ui/react";
import Accordion from "./Components/Accordion";
import './App.css';


function AboutComp() {


    return (
        <Flex justify="center" align="top" height="70vh" paddingTop="30px" >

            <Box justify="center"  >
                <div>
                    <Text fontSize="40px" textShadow="0 5px #000000" paddingTop="30px" paddingBottom="15px">
                        Our Story
                    </Text>

                </div>
                
                <div>

                    <Accordion />

                </div>
            </Box>
        </Flex>

    )


}

export default AboutComp;