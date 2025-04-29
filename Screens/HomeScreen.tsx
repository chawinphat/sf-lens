import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import ProfileButton from "../components/ProfileButton"

export default function HomeScreen() {
  const navigation = useNavigation()

  const navigateToProfile = () => {
    // @ts-ignore - We're ignoring the type checking here since we're using a string for navigation
    navigation.navigate("Profile")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>San Francisco Landmarks</Text>
        <ProfileButton size="medium" />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to SF Landmarks Guide</Text>
          <Text style={styles.welcomeText}>
            Discover the best landmarks in San Francisco and track your adventures.
          </Text>

          <TouchableOpacity style={styles.profileCard} onPress={navigateToProfile}>
            <View style={styles.profileCardContent}>
              <Feather name="user" size={24} color="#2196F3" />
              <View style={styles.profileCardText}>
                <Text style={styles.profileCardTitle}>Your Profile</Text>
                <Text style={styles.profileCardDescription}>
                  View your visited places, wishlist, and account settings
                </Text>
              </View>
              <Feather name="chevron-right" size={24} color="#888" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Landmarks</Text>
          {/* Sample landmarks - in a real app, these would come from your data source */}
          <View style={styles.landmarkCard}>
            <Image
              source={{ uri: "https://source.unsplash.com/random/400x200/?goldengatebridge" }}
              style={styles.landmarkImage}
            />
            <View style={styles.landmarkInfo}>
              <Text style={styles.landmarkName}>Golden Gate Bridge</Text>
              <Text style={styles.landmarkDescription}>
                The iconic suspension bridge connecting San Francisco to Marin County.
              </Text>
            </View>
          </View>

          <View style={styles.landmarkCard}>
            <Image
              source={{ uri: "https://source.unsplash.com/random/400x200/?alcatraz" }}
              style={styles.landmarkImage}
            />
            <View style={styles.landmarkInfo}>
              <Text style={styles.landmarkName}>Alcatraz Island</Text>
              <Text style={styles.landmarkDescription}>
                Former federal prison located on an island in San Francisco Bay.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// Import Feather icons
import { Feather } from "@expo/vector-icons"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  welcomeSection: {
    padding: 20,
    backgroundColor: "white",
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  profileCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  profileCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileCardText: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  profileCardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  profileCardDescription: {
    fontSize: 14,
    color: "#666",
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  landmarkCard: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  landmarkImage: {
    width: "100%",
    height: 180,
  },
  landmarkInfo: {
    padding: 16,
  },
  landmarkName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  landmarkDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
})
