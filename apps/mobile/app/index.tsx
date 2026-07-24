import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { brand } from '@megajs/design-tokens';

const links = [
  { href: '/today', label: 'Today' },
  { href: '/learn', label: 'Learn' },
  { href: '/practice', label: 'Practice' },
  { href: '/live', label: 'Live' },
  { href: '/profile', label: 'Profile' },
] as const;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.brand}>MEGA JS</Text>
        <Text style={styles.tagline}>Daily JavaScript learning OS</Text>
      </View>
      <View style={styles.nav}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={({ pressed }) => [styles.btn, pressed && { opacity: 0.85 }]}>
              <Text style={styles.btnText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 24 },
  hero: {
    backgroundColor: brand.ink,
    borderRadius: 20,
    padding: 24,
    minHeight: 160,
    justifyContent: 'flex-end',
  },
  brand: { color: brand.accent, fontSize: 32, fontWeight: '800' },
  tagline: { color: '#fff', marginTop: 8, fontSize: 16 },
  nav: { gap: 10 },
  btn: {
    backgroundColor: brand.accent,
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: brand.ink, fontWeight: '700', fontSize: 16 },
});
