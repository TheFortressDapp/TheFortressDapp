import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Logo from "./assets/background/The_Fortress_Logo_Clear.png";



function TeamComp (){

    
    return (
        <Flex justify ="center" align="top" height="70vh" paddingTop="100px">
            
            <Box width="1000px">
                <div>
                    <Image src={Logo} boxSize="200px" margin="0 15px" />
                    <Text fontSize="48px" textShadow="0 5px #000000">
                    The Fortress
                    </Text>

                    <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                    Welcome
                     </Text>
                     <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">
                    (Mint Coming Soon)
                     </Text>

                 </div>
                 </Box>
                 </Flex>
    )


}

export default TeamComp;