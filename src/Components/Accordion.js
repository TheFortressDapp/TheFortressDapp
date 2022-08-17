import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Flex, Box, Stack } from "@chakra-ui/react";
import '../App.css';



const Accordion = () => {

    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    

    return (
        <IconContext.Provider  value={{ color: '#4267B3', size: '40px' }}>
            <Flex  justify="center"  >
                <Box  >
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Stack  onClick={() => toggle(index)} key={index}>
                                    <h1 style={{ fontSize: "35px" }}>{item.title}</h1>
                                    <span> { clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                    <span></span>
                                </Stack>
                                {clicked === index ? (
                                    <Box  background='rgba(66,103,179, 1)'  fontFamily="VT323" padding='20px' fontSize="30px" textShadow="0 2px #000000" margin="5">
                                        <Flex >
                                            <p1>{item.definition_1}</p1>
                                        </Flex >
                                        <p1>{item.definition_2}</p1>
                                        <p1>{item.definition_3}</p1>
                                    </Box>

                                ) : null}


                            </>
                        )
                    })}
                </Box>
            </Flex>
        </IconContext.Provider>
    );
};

export default Accordion;