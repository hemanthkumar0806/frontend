import { FormControl, FormLabel, FormHelperText, Input, Button, Box, VStack, Link } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Api } from '../actions/api';

export const SignUp = () => {
    const [Name, setName] = useState('');
    const [Clg, setClg] = useState('');
    const [Branch, setBranch] = useState('');
    const [Num, setNum] = useState('');
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [Cpass, setCpass] = useState('');

    const Sign = async () => {
        if (!Name || !Clg || !Branch || !Num || !Email || !Pass || !Cpass) {
            alert("Please fill in all required details.");
            return;
        }

        if (Pass !== Cpass) {
            alert("Passwords do not match.");
            return;
        }

        await axios.post(Api + "/SignUp", { Name, Clg, Branch, Num, Email, Pass, Cpass })
            .then((res) => {
                console.log(res);

                if (res.data.message) {
                    alert("Sign Up successfully");
                } else {
                    alert("Error: " + res.data.error);
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <Box
            maxWidth="md"
            mx="auto"
            mt={10}
            p={6}
            borderRadius="md"
            boxShadow="xl"
            bgGradient="linear(to-r, purple.400, pink.300)"
            color="white"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
        >
            <VStack spacing={6} align="stretch">
                <Box textAlign="center">
                    <h1 style={{
                        fontSize: '2xl',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                        marginBottom: '20px'
                    }}>
                        Sign Up
                    </h1>
                </Box>

                <form>
                    <FormControl id="username" mb={4}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">User Name:</FormLabel>
                        <Input
                            type='text'
                            name='username'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" // Set input text color to black
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="college" mb={4}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">College Name:</FormLabel>
                        <Input
                            type='text'
                            name='college'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" // Set input text color to black
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setClg(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="branch" mb={4}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">Branch:</FormLabel>
                        <Input
                            type='text'
                            name='branch'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" // Set input text color to black
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setBranch(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="phone" mb={4}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">Phone No.:</FormLabel>
                        <Input
                            type='tel'
                            name='phone'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" // Set input text color to black
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setNum(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="email" mb={4}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">Email Address:</FormLabel>
                        <Input
                            type='email'
                            name='email'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" // Set input text color to black
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormHelperText color="whiteAlpha.700">We'll never share your email.</FormHelperText>
                    </FormControl>

                    <FormControl id="password" mb={4}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">Create Password:</FormLabel>
                        <Input
                            type='password'
                            name='password'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" // Set input text color to black
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="confirm-password" mb={6}>
                        <FormLabel color="white" fontWeight="semibold" letterSpacing="wide">Confirm Password:</FormLabel>
                        <Input
                            type='password'
                            name='confirm-password'
                            variant='filled'
                            bg="whiteAlpha.800"
                            borderColor="whiteAlpha.400"
                            color="black" 
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                            onChange={(e) => setCpass(e.target.value)}
                        />
                    </FormControl>

                    <Button
                        colorScheme="purple"
                        size="lg"
                        variant="solid"
                        width="full"
                        _hover={{ bg: 'purple.600', transform: 'scale(1.05)' }}
                        transition="transform 0.2s ease, bg 0.2s ease"
                        onClick={Sign}
                    >
                        Sign Up
                    </Button>
                </form>

                <Box textAlign="center" mt={6}>
                    <p style={{ color: 'white', fontSize: 'sm' }}>
                        Already have an account?{' '}
                        <Link
                            color="teal.200"
                            href="/signin"
                            fontWeight="bold"
                            _hover={{ textDecoration: 'underline' }}
                            transition="color 0.3s ease"
                        >
                            Sign In
                        </Link>
                    </p>
                </Box>
            </VStack>
        </Box>
    );
};
