import { useAuth } from '@/components/context/auth-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const { login } = useAuth();

  const handleUsernameChange = (text: string) => {
    setUsername(text)
  }

  const handlePasswordChange = (text: string) => {
    setPassword(text)
  }

  const handleLogin = () => {
    try {
      login(username, password);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Login Failed', (error as Error).message);
    }
}

  return (
    <View style={styles.container}>
      <Text>Iniciar Sesión</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Email"
        onChangeText={handleUsernameChange}
      />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={handlePasswordChange}
      />
      </View>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>🐾 Login 🐾</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  label: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#1ceb49ff',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#35c254ff',
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
})
