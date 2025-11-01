import { useAuth } from '@/components/context/auth-context';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleToggle = () => {
    setOpen(!open);
  }

  const handleLogout = () => {
    logout();
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bienvenido {user?.name}</Text>
      <Text>This is a counter: {count}</Text>
      <Pressable style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>Increment</Text>
      </Pressable>
      <Text>The toggle is {open ? 'ON' : 'OFF'}</Text>
      <Pressable style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>Toggle</Text>
      </Pressable>
      <Text>Hola {user?.name}</Text>
      <Link href="/modal" style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Link>

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1cf051ff',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    color: '#1d0404ff',
    textAlign: 'center',
  },
  });
