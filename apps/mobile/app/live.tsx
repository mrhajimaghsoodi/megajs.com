import { Text, View } from 'react-native';

export default function LiveScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '800' }}>Live</Text>
      <Text style={{ marginTop: 8, color: '#52525b' }}>
        Upcoming webinars and simulcast destinations.
      </Text>
    </View>
  );
}
