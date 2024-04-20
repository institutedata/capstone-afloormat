import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const IndexPage = () => {
    return (
        <View>
            <Text>Login</Text>
            <View>
                <Text>Email</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray' }}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray' }}
                    placeholder="Enter your password"
                    secureTextEntry
                    required
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forgot password? Idiot.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <View></View>
            <Text>Don't have an account? Bummer dude, <TouchableOpacity><Text>Sign up now</Text></TouchableOpacity></Text>
        </View>
    );
};

export default IndexPage;
