import React from "react";
import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import theNFTFortress from './TheNFTFortress.json';
import { Box, Button, Flex, Input, Text, Image } from "@chakra-ui/react";
import Logo from "./assets/background/The_Fortress_Logo_Clear.png";


const theNFTFortressAddress = "0x08be79d4EBd36F9c49FB04140C5842B91B39f71F";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handdleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                theNFTFortressAddress,
                theNFTFortress.abi,
                signer

            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.05 * mintAmount).toString()),
                });
                console.log('response: ', response);

            } catch (err) {
                console.log('error', err)
            }
        }
    };


    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 20) return;
        setMintAmount(mintAmount + 1);
    };



    return (
        <Flex id="Mainmint" justify="center" align="top" height="80vh" >

            <Box width="1000px">
                <div>
                    <Image src={Logo} boxSize="200px" margin="0 10px" align="center" justify="center" />
                    <Text fontSize="48px" textShadow="0 5px #000000">
                        The Fortress
                    </Text>

                    <Text fontSize="30px" letterSpacing="-3%" fontFamily="VT323" textShadow="0 2px #000000">
                        When Fear, Uncertainty, and Doubt are whispers carried by the wind, come and find protection for your digital assets at The Fortress.

                    </Text>

                </div>

                {isConnected ? (
                    <><div>
                        <Flex align="center" justify="center">
                            <Button
                                backgroundColor="#4267B3"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                maringTop="10px"
                                onClick={handleDecrement}>-</Button>

                            <Input
                                readOnly
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="19px"
                                marginTop="10px"
                                type="number"
                                value={mintAmount} />

                            <Button
                                backgroundColor="#4267B3"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                maringTop="10px" onClick={handleIncrement}>+</Button>
                        </Flex>
                        <Button
                            backgroundColor="#4267B3"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            maringTop="10px"
                            onClick={handdleMint}>Mint Now</Button>
                    </div><div>

                            <Text
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="VT323"
                                textShadow="0 2px #000000"
                                align="center">
                                Mint Price is .25 ETH per NFT

                            </Text>
                            <Text
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="VT323"
                                textShadow="0 2px #000000"
                                align="center">
                                not including gas
                            </Text>

                        </div></>

                ) : (
                    <><Text
                        marginTop="70px"
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 3px #000000"
                        color="#4267B3"
                    >Please connect wallet to mint</Text>
                        <div>

                            <Text
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="VT323"
                                textShadow="0 2px #000000"
                                align="center">
                                Mint Price is .25 ETH per NFT

                            </Text>
                            <Text
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="VT323"
                                textShadow="0 2px #000000"
                                align="center">
                                not including gas
                            </Text>

                        </div></>
                )}
            </Box>
        </Flex>

    );
};

export default MainMint;