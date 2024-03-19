import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
   
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handlePrintValues = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 5 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 5 }}
      />
      <Button title="Login" onPress={handleLogin} />
      
      <Button title="Print Values" onPress={handlePrintValues} />
    </View>
  );
};

export default Login;
