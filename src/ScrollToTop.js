import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineArrowUp} from 'react-icons/ai'


const ScrollToTop = () => { 

   

    return (
        
        
        <IconContext.Provider   value={{ color: '#fff', size: '50px' }}>
            <Flex bgPosition="right" justify="end" marginEnd="5" marginBottom="5">
                
                <AiOutlineArrowUp />

            </Flex>
        </IconContext.Provider>
        
    );
}


export default ScrollToTop;