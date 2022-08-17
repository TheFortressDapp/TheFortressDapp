import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Logo from "./assets/background/The_Fortress_Logo_Clear.png";
import { useMediaQuery } from "@chakra-ui/react";



function MintingSoon() {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    return (
        <section id="home">
            <Flex justify="center" align="center" paddingBottom="300px" height={isLargerThan768 ? "100vh" : ""}>

                <Box >
                    <div>
                        <Image src={Logo} boxSize="200px" margin="5" />
                        <Text fontSize="48px" textShadow="0 5px #000000">
                            The Fortress
                        </Text>

                        <Text fontSize="35px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                            Welcome
                        </Text>
                        <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                            (Mint Coming Soon)
                        </Text>

                    </div>
                </Box>
            </Flex>
        </section>
    )


}

export default MintingSoon;