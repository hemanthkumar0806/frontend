import { FormControl, FormLabel, FormHelperText, Input, Button, Box, VStack, Link, useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Api } from '../actions/api';

export const SignIn = () => {
    const [Email, setemail] = useState('');
    const [Password, setpassword] = useState('');

    const Signin = () => {
        if (!Email || !Password) {
            alert("Please fill in all the details.");
            return;
        }

        axios.post(Api + "/signin", { Email, Password })
            .then((res) => {
                console.log(res?.data);

                if (res.data.message) {
                    alert("Login successfully");
                } else {
                    alert(res.data.error);
                    window.location.href = "/signup";
                }
            })
            .catch((e) => {
                console.error(e);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <Box
            maxWidth="md"
            mx="auto"
            mt={10}
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            bgGradient="linear(to-br, teal.400, blue.600)"
            color="white"
            border="1px solid"
            borderColor="teal.200"
            transition="all 0.3s ease"
            _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
        >
            <VStack spacing={6} align="stretch">
                <Box textAlign="center">
                    <h1 style={{ fontSize: '2xl', fontWeight: 'bold', color: '#ffffff' }}>Sign In</h1>
                </Box>

                <form>
                    <FormControl id="email" mb={6}>
                        <FormLabel color="white" fontWeight="bold">Email Address</FormLabel>
                        <Input
                            type='email'
                            name='email'
                            variant='outline'
                            bg="whiteAlpha.900"
                            placeholder='example@example.com'
                            borderColor="whiteAlpha.400"
                            _placeholder={{ color: 'gray.600' }}
                            onChange={(e) => setemail(e.target.value)}
                            required
                            _focus={{ borderColor: 'teal.300', boxShadow: '0 0 0 1px teal.300' }}
                            transition="all 0.3s ease"
                            color="black"
                        />
                        <FormHelperText color="whiteAlpha.800">Forgot email?</FormHelperText>
                    </FormControl>

                    <FormControl id="password" mb={6}>
                        <FormLabel color="white" fontWeight="bold">Password</FormLabel>
                        <Input
                            type='password'
                            name='password'
                            variant='outline'
                            bg="whiteAlpha.900"
                            borderColor="whiteAlpha.400"
                            _placeholder={{ color: 'gray.600' }}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                            _focus={{ borderColor: 'teal.300', boxShadow: '0 0 0 1px teal.300' }}
                            transition="all 0.3s ease"
                            color="black"
                        />
                        <FormHelperText color="whiteAlpha.800">
                            <Link href='/forgotpass' color="teal.300">Forgot password?</Link>
                        </FormHelperText>
                    </FormControl>

                    <Button
                        colorScheme="teal"
                        size="lg"
                        variant="solid"
                        width="full"
                        _hover={{ bg: 'teal.600', transform: 'scale(1.05)' }}
                        onClick={Signin}
                        transition="all 0.3s ease"
                    >
                        Sign In
                    </Button>
                </form>

                <Box textAlign="center" mt={4}>
                    <Link color="teal.300" fontWeight="bold" href="/signup">
                        Don't have an account? <span style={{ textDecoration: 'underline' }}>Sign up</span>
                    </Link>
                </Box>
            </VStack>
        </Box>
    );
};
