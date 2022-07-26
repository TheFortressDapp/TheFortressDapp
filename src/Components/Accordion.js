import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Flex, Box } from "@chakra-ui/react";
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
        <IconContext.Provider value={{ color: '#4267B3', size: '40px' }}>
            <Flex justify='center'>
                <Box justifyContent='center'>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Flex justify='center' onClick={() => toggle(index)} key={index}>
                                    <h1 style={{ fontSize: "35px", justify:"center" }}>{item.title}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                    <span></span>
                                </Flex>
                                {clicked === index ? (
                                    <Box justifyContent='center' background='rgba(66,103,179, 0.7)' padding='20px' fontSize="25px">
                                        <Flex justify='center'>
                                            <p1>{item.definition_1}</p1>
                                        </Flex>
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