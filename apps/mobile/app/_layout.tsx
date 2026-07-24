import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#22c55e' },
          headerTintColor: '#1a1a1a',
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'MEGA JS' }} />
        <Stack.Screen name="today" options={{ title: 'Today' }} />
        <Stack.Screen name="learn" options={{ title: 'Learn' }} />
        <Stack.Screen name="practice" options={{ title: 'Practice' }} />
        <Stack.Screen name="live" options={{ title: 'Live' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      </Stack>
    </>
  );
}
