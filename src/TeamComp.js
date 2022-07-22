import React from "react";
import { Flex, Text, Image, Stack } from "@chakra-ui/react";
import Killabears from "./assets/team-images/KillaBears.png"
import Women_From_Venys from "./assets/team-images/Women_From_Venus.jpg"
import SmallBros from "./assets/team-images/SmallBros.png"
import Evil_Ape_Club from "./assets/team-images/Evil_Ape_Club.png"
import MiniSupers from "./assets/team-images/MiniSupers.png"
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import { Link } from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";
import './App.css';





function TeamComp() {

    


    return (

        

        <div>
            <Flex justify="center" align="top" marginTop="5" >
                <div>

                    <Text fontSize="20px" textShadow="0 5px #000000" paddingTop="30px" paddingBottom="15px">
                        MEET THE TEAM
                    </Text>
                    <Text fontSize="20px" letterSpacing="-3%" fontFamily="VT323">
                        Amazing talent devoted to a single mission: To give you peace of mind on your Metaverse journey.

                    </Text>
                </div>
            </Flex>


            <Flex justify="center" paddingTop={30}>

                <Stack direction={['column', 'row']} spacing='50px' justify="center" align="top"  >
                    <div></div>
                    <Flex background="gray" margin={5}>
                        <div >
                            <Image src={Killabears} boxSize="200px" justify="center" align="top" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="18px" justify="center" margin="6px">
                                    Mer
                                </Text>
                                
                                    <FcApproval  />
                                    
                            </Flex>
                            <Text fontSize="12px" justify="center" margin="6px">
                                Founder
                            </Text>
                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="15px" margin="10px" />
                                </Link>
                                
                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="15px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Flex>


                    <Flex background="gray" margin={5}>
                        <div>
                            <Image src={Evil_Ape_Club} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="18px" justify="center" margin="6px">
                                    Mer
                                </Text>
                                <FcApproval />
                            </Flex>
                            <Text fontSize="12px" justify="center" margin="6px">
                                Blockchain Dev
                            </Text>

                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="15px" margin="10px" />
                                </Link>
                                
                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="15px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Flex>

                    <Flex background="gray" margin={5} >
                        <div>
                            <Image src={MiniSupers} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="18px" justify="center" margin="6px">
                                    Mer
                                </Text>
                                <FcApproval />
                            </Flex>
                            <Text fontSize="12px" justify="center" margin="6px">
                                Web Designer
                            </Text>

                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="15px" margin="10px" />
                                </Link>
                                
                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="15px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Flex>


                    <Flex background="gray" margin={5}>
                        <div>
                            <Image src={SmallBros} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="18px" justify="center" margin="6px">
                                    Mer
                                </Text>
                                <FcApproval />
                            </Flex>

                            <Text fontSize="12px" justify="center" margin="6px">
                                Artist
                            </Text>
                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="15px" margin="10px" />
                                </Link>
                                
                                <Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="15px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Flex>


                    <Flex background="gray" margin={5}>
                        <div>
                            <Image src={Women_From_Venys} boxSize="200px" justify="center" />
                            <Flex align={'center'} justify="center">
                                <Text fontSize="18px" justify="center" margin="6px">
                                    Mer
                                </Text>
                                <FcApproval />
                            </Flex>

                            <Text fontSize="12px" justify="center" margin="6px">
                                Marketing
                            </Text>
                            <Flex justify="center" >

                                <Link href="https://twitter.com/realMerStudios">
                                    <Image src={Twitter} boxSize="15px" margin="10px" />
                                </Link>
                                
                                < Link onClick={() => window.location = 'mailto:contact@thefortressnft.com'}>
                                    <Image src={Email} boxSize="15px" margin="10px" />
                                </Link>
                            </Flex>
                        </div>
                    </Flex>



                </Stack>


            </Flex>

        </div>

    )



}

export default TeamComp;