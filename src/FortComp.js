import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Logo from "./assets/background/The_Fortress_Logo_Clear.png";
import { useMediaQuery } from "@chakra-ui/react";






function TeamComp() {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


    return (

        <section id="fort">
            <Flex  justify="center"  height={isLargerThan768 ? "100vh" : ""} paddingTop="10%" >

                <Box width="1000px">
                    <div>
                        <Image src={Logo} boxSize="200px" margin="0 15px" />
                        <Text fontSize="48px" textShadow="0 5px #000000">
                            The Fort
                        </Text>

                        <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                            This is where the magic will happen
                        </Text>
                        <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                            (Coming Soon. Follow us on Twitter)
                        </Text>

                    </div>
                </Box>
            </Flex>
        </section>
    )


}

export default TeamComp;