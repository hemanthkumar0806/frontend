import { useState } from 'react';
import { FormControl, FormLabel, FormHelperText, Input, Button, Box, VStack, useDisclosure, Collapse } from '@chakra-ui/react';

export const Forgort = () => {
    const [showResetFields, setShowResetFields] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleEnterClick = () => {
        
        if (email && otp) {
            setShowResetFields(true);
        }
    };
    

    return (
        <Box
            maxWidth="md"
            mx="auto"
            mt={10}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
        >
            <VStack spacing={4} align="stretch">
                <Box textAlign="center" mb={6}>
                    <h1 style={{
                        fontSize: '2xl',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                        marginBottom: '20px'
                    }}>
                        Reset Password
                    </h1>
                </Box>

                <form>
                    <FormControl id="email" mb={4}>
                        <FormLabel color="white" fontWeight="semibold">Email Address</FormLabel>
                        <Input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant='filled'
                            bg="whiteAlpha.800"
                            placeholder='example@gmail.com'
                            borderColor="whiteAlpha.400"
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                        />
                        <FormHelperText color="whiteAlpha.700">Enter your registered email.</FormHelperText>
                    </FormControl>

                    <FormControl id="otp" mb={4}>
                        <FormLabel color="white" fontWeight="semibold">OTP</FormLabel>
                        <Input
                            type='number'
                            name='otp'
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            variant='filled'
                            bg="whiteAlpha.800"
                            placeholder='123456'
                            borderColor="whiteAlpha.400"
                            _placeholder={{ color: 'gray.500' }}
                            transition="border-color 0.3s ease"
                            _focus={{ borderColor: 'purple.300' }}
                        />
                        <FormHelperText color="whiteAlpha.700">Enter the OTP sent to your email.</FormHelperText>
                    </FormControl>

                    <Button
                        colorScheme="purple"
                        size="lg"
                        variant="solid"
                        width="full"
                        onClick={handleEnterClick}
                        _hover={{ bg: 'purple.600', transform: 'scale(1.05)' }}
                        transition="transform 0.2s ease, bg 0.2s ease"
                        mb={4}
                    >
                        Enter
                    </Button>

                    <Collapse in={showResetFields}>
                        <FormControl id="new-password" mb={4}>
                            <FormLabel color="white" fontWeight="semibold">New Password</FormLabel>
                            <Input
                                type='password'
                                name='new-password'
                                variant='filled'
                                bg="whiteAlpha.800"
                                borderColor="whiteAlpha.400"
                                _placeholder={{ color: 'gray.500' }}
                                transition="border-color 0.3s ease"
                                _focus={{ borderColor: 'purple.300' }}
                            />
                        </FormControl>

                        <FormControl id="confirm-password" mb={6}>
                            <FormLabel color="white" fontWeight="semibold">Confirm Password</FormLabel>
                            <Input
                                type='password'
                                name='confirm-password'
                                variant='filled'
                                bg="whiteAlpha.800"
                                borderColor="whiteAlpha.400"
                                _placeholder={{ color: 'gray.500' }}
                                transition="border-color 0.3s ease"
                                _focus={{ borderColor: 'purple.300' }}
                            />
                        </FormControl>

                        <Button
                            colorScheme="purple"
                            size="lg"
                            variant="solid"
                            width="full"
                            _hover={{ bg: 'purple.600', transform: 'scale(1.05)' }}
                            transition="transform 0.2s ease, bg 0.2s ease"
                        >
                            Reset
                        </Button>
                    </Collapse>
                </form>
            </VStack>
        </Box>
    );
};
