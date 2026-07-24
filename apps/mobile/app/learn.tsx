import { Text, View } from 'react-native';

export default function LearnScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '800' }}>Learn</Text>
      <Text style={{ marginTop: 8, color: '#52525b' }}>
        Tracks and courses from the shared MEGA JS API.
      </Text>
    </View>
  );
}
