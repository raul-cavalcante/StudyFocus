import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

export default function Screen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace('/auth/login');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Study Focus</Text>
      <Text style={styles.description}>
        Organize suas tarefas e aumente sua produtividade com o nosso gerenciador de tarefas.
      </Text>
      <Button title="Começar" onPress={handleGetStarted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
});
