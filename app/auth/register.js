import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../../src/services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/auth/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
