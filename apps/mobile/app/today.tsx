import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { brand } from '@megajs/design-tokens';
import { createApiClient } from '@megajs/sdk';

const api = createApiClient({
  baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api',
});

export default function TodayScreen() {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    void api.tracks.list('fa').then((d) => setTracks(d as any[])).catch(() => setTracks([]));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Today</Text>
      <Text style={styles.p}>Continue your Frontend JS path. Streak + daily challenge live here.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Suggested track</Text>
        <Text style={styles.mono}>{tracks[0]?.title ?? 'Language Core'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 12 },
  h1: { fontSize: 28, fontWeight: '800', color: brand.ink },
  p: { color: '#52525b', lineHeight: 22 },
  card: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fff',
  },
  cardTitle: { fontWeight: '700', marginBottom: 6 },
  mono: { fontFamily: 'monospace', color: brand.ink },
});
