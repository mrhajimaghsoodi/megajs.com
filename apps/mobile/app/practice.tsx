import { Text, View } from 'react-native';

export default function PracticeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '800' }}>Practice</Text>
      <Text style={{ marginTop: 8, color: '#52525b' }}>
        Challenges → score → tokens (same entitlements engine as web).
      </Text>
    </View>
  );
}
