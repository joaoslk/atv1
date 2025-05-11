import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://instagram.frec4-1.fna.fbcdn.net/v/t51.2885-19/481755977_2814807545359497_9190232675798698960_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.frec4-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QF8zXoA7SiwieuLYRubtshlzftFJCqo3AFj9AfibiQGLYWFi10L1AjqiHy8Df_IocARnC3Yrk3SEZAE2ovb5WTM&_nc_ohc=aBrwV2fCgzEQ7kNvwEVsxoz&_nc_gid=4t0wm8TqNZKSkJwrMSxe-A&edm=AGFyKLkBAAAA&ccb=7-5&oh=00_AfKjom-lb5f4PL7ixRHDTvx6NPfay3GbGMmOgS5HL4m1aQ&oe=6825D861&_nc_sid=5a0a6d' }}  // Troque pelo seu link de imagem
          style={styles.profileImage}
        />
        <Text style={styles.name}>Pedro Paulino</Text>
        <Text style={styles.phrase}>“Vivendo e aprendendo”</Text>  // Personalize sua frase
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    width: '100%',
    maxWidth: 320,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#00d1ff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  phrase: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#cccccc',
    textAlign: 'center',
  },
});
