import React from "react";
import { Flex, Text, Image, Stack, Box } from "@chakra-ui/react";
import Killabears from "./assets/team-images/KillaBears.png"
import Women_From_Venys from "./assets/team-images/Women_From_Venus.jpg"
import SmallBros from "./assets/team-images/SmallBros.png"
import Evil_Ape_Club from "./assets/team-images/Evil_Ape_Club.png"
import MiniSupers from "./assets/team-images/MiniSupers.png"
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import { Link } from "@chakra-ui/react";
import './App.css';
import { useMediaQuery } from "@chakra-ui/react";





function TeamComp() {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");




    return (



        <div>
            <Flex justify="center" align="top" paddingTop="30px" >
                <div>

                    <Text fontSize="40px" textShadow="0 5px #000000" paddingTop="30px" paddingBottom="15px">
                        MEET THE TEAM
                    </Text>
                    <Text fontSize="35px" letterSpacing="-3%" fontFamily="VT323">
                        Amazing talent devoted to a single mission: To give you peace of mind on your journey through the Metaverse.

                    </Text>
                </div>
            </Flex>


            <Flex 
                
                paddingTop={30} justify="center" >

                <Stack direction={isLargerThan768 ? "row" : "column"} spacing='50px' justify="center" align="top"  >
                    <div></div>
                    <Box background="gray" margin={5}>
                        <div >
                            <Image src={Killabears} boxSize="200px" justify="center" align="top" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="25px" justify="center" margin="6px" textShadow="0 2px #000000">
                                    Mer
                                </Text>

                            </Flex>
                            <Text fontSize="15px" justify="center" margin="6px" textShadow="0 2px #000000">
                                Founder
                            </Text>
                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="25px" margin="10px" />
                                </Link>

                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="25px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Box>


                    <Box background="gray" margin={5}>
                        <div>
                            <Image src={Evil_Ape_Club} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="25px" justify="center" margin="6px" textShadow="0 2px #000000">
                                    Mer
                                </Text>
                                
                            </Flex>
                            <Text fontSize="15px" justify="center" margin="6px" textShadow="0 2px #000000">
                                Developer
                            </Text>

                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="25px" margin="10px" />
                                </Link>

                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="25px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Box>

                    <Box background="gray" margin={5} >
                        <div>
                            <Image src={MiniSupers} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="25px" justify="center" margin="6px" textShadow="0 2px #000000">
                                    Mer
                                </Text>
                                
                            </Flex>
                            <Text fontSize="15px" justify="center" margin="6px" textShadow="0 2px #000000">
                                Web Designer
                            </Text>

                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="25px" margin="10px" />
                                </Link>

                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="25px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Box>


                    <Box background="gray" margin={5}>
                        <div>
                            <Image src={SmallBros} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="25px" justify="center" margin="6px" textShadow="0 2px #000000">
                                    Mer
                                </Text>
                                
                            </Flex>

                            <Text fontSize="15px" justify="center" margin="6px" textShadow="0 2px #000000">
                                Artist
                            </Text>
                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="25px" margin="10px" />
                                </Link>

                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="25px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Box>


                    <Box background="gray" margin={5}>
                        <div>
                            <Image src={Women_From_Venys} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="25px" justify="center" margin="6px" textShadow="0 2px #000000">
                                    Mer
                                </Text>
                                
                            </Flex>

                            <Text fontSize="15px" justify="center" margin="6px" textShadow="0 2px #000000">
                                Marketing
                            </Text>
                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="25px" margin="10px" />
                                </Link>

                                < Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="25px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Box>



                </Stack>


            </Flex>

        </div>

    )



}

export default TeamComp;