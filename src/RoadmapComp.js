import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";


function RoadmapComp() {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


    return (

        <section id="roadmap">
            <Flex justify="center" paddingTop="20" height={isLargerThan768 ? "" : ""}>

                <Box justify="center" width="1000px" >
                    <div>
                        <Text fontSize="40px" textShadow="0 5px #000000" paddingTop="30px" paddingBottom="15px">
                            The Roadmap
                        </Text>

                        <Text fontSize="25px" textShadow="0 5px #000000" marginTop="50" color='#4267B3'>
                            Phase I
                        </Text>
                        <Box >
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5" >
                                - Launch "The Fortress" NFT Contract -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Launch "The Fortress" Pairing Contract -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Launch "The Fort" Dashboard with protection for up to 5 ETH -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Launch Dashboard for New Collections request for approval -
                            </Text>
                        </Box>


                        <Text fontSize="25px" textShadow="0 5px #000000" marginTop="50" color='#4267B3'>
                            Phase II
                        </Text>
                        <Box >
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Activate protection for up to 20 ETH -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Extend protection to other Digital Assets -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Launch "Alpha" group for Diamond holders -
                            </Text>
                        </Box>
                        <Box>

                            <Text fontSize="25px" textShadow="0 5px #000000" marginTop="50" color='#4267B3'>
                                Phase III
                            </Text>

                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Activate protection for up to 50 ETH -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Build "The Fortress" in the Metaverse -
                            </Text>
                            <Text backgroundColor='#4267B3' fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" margin="5">
                                - Initiate "The Fortress" R.T.D. Program -
                            </Text>


                        </Box>

                    </div>

                </Box>
            </Flex>
        </section>
    )


}

export default RoadmapComp;