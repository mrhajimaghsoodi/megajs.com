import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '800' }}>Profile</Text>
      <Text style={{ marginTop: 8, color: '#52525b' }}>
        Phone OTP login, wallet, enrollments — shared User identity.
      </Text>
    </View>
  );
}
