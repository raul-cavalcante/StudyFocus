import { View, Text, Button, FlatList, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';
import { signOut, getAuth } from 'firebase/auth';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { salvarMeta } from '../src/services/salvarMetas';
import { auth, db} from '../src/services/firebaseConfig'


export default function Home() {



  const handleMetas = async () => {
    await salvarMeta('ler 5 livros', '15/01/2025')
  }

  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/auth/loginn');
  };

  return (
    <View>
      
      <Text>Página HOME</Text>
      <Text>Suas Metas:</Text>
      <Button title="Adicionar Meta" onPress={handleMetas} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}