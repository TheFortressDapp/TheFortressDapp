import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";






function RoadmapComp (){

    
    return (
        <Flex justify ="center" align="top" height="70vh" paddingTop="30px">
            
            <Box justify="center" width="1000px" >
                <div>
                    <Text fontSize="20px" textShadow="0 5px #000000" marginBottom='30'>
                        The Roadmap
                    </Text>

                    <Text fontSize="24px" textShadow="0 5px #000000" marginTop="50" color='#4267B3'>
                        Phase I
                    </Text>
                    <Box lineHeight=".5">
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000" >
                        - Launch "The Fortress" NFT Contract -                    
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000"> 
                        - Launch "The Fortress" Pairing Contract -  
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">  
                        - Launch "The Fort" Dashboard with protection for up to 5 ETH -
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        - Launch Dashboard for New Collections request for approval - 
                    </Text>
                    </Box>
                    

                    <Text fontSize="24px" textShadow="0 5px #000000" marginTop="50" color='#4267B3'>
                        Phase II
                    </Text>
                    <Box lineHeight=".5">
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        - Activate protection for up to 20 ETH -                        
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000"> 
                        - Extend protection to other Digital Assets -
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">  
                        - Launch "Alpha" group for Diamond holders - 
                    </Text>

                    <Text fontSize="24px" textShadow="0 5px #000000" marginTop="50" color='#4267B3'>
                        Phase III
                    </Text>
                    
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                        - Activate protection for up to 50 ETH -                       
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000"> 
                        - Build "The Fortress" in the Metaverse -
                    </Text>
                    <Text fontSize="24px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000"> 
                        - Initiate "The Fortress" Training -
                    </Text>

                
                    </Box>

                </div>
                
            </Box>
                 </Flex>
    )


}

export default RoadmapComp;