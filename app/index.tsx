import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';


const images = [
  require('../assets/images/goldengate.jpg'),
  require('../assets/images/baybridge.jpg'),
  require('../assets/images/palace.jpg')
];

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / screenWidth
            );
            setCurrentImage(index);
          }}
          scrollEventThrottle={16}
        >
          {images.map((img, idx) => (
            <View key={idx} style={styles.imageWrapper}>
              <ImageBackground source={img} style={styles.image}>
                <LinearGradient
                  colors={['rgba(204,204,204,0.9)', 'transparent']}
                  style={styles.topGradient}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(204,204,204,0.95)']}
                  style={styles.bottomGradient}
                />
              </ImageBackground>
            </View>
          ))}
        </ScrollView>

        <View style={styles.dotsContainer}>
          {images.map((_, idx) => (
            <View
              key={idx}
              style={[styles.dot, currentImage === idx && styles.dotActive]}
            />
          ))}
        </View>
      </View>

      <View style={styles.fixedContent}>
        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.authBtn}>
            <Text style={styles.authText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authBtn}>
            <Text style={styles.authText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.googleBtn}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.guest}>EXPLORE AS GUEST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  imageContainer: {
    height: 600,
    width: '100%',
    position: 'relative',
    paddingTop: 40
  },
  imageWrapper: {
    width: screenWidth,
    height: 695
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 160,
    zIndex: 1
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
    zIndex: 1
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
    marginHorizontal: 8
  },
  dotActive: {
    backgroundColor: '#333'
  },
  fixedContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 32
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  authBtn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 9,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa'
  },
  authText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20
  },
  googleLogo: {
    width: 30,
    height: 20,
    marginRight: 10
  },
  googleText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500'
  },
  guest: {
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 10
  }
});
