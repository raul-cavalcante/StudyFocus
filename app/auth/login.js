import { useState } from 'react';
import { View, TextInput, Button, Text, Link } from 'react-native';
import { auth } from '../../src/services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegist = () => {
    router.navigate('/auth/register');
  };


  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Registra-se" onPress={handleRegist} />

      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
