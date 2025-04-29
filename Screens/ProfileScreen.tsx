"use client"

import { useState } from "react"
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert, Modal } from "react-native"
import { StatusBar } from "expo-status-bar"
import Avatar from "../components/Avatar"
import PlacesList from "../components/PlacesList"
import AccountSettings from "../components/AccountSettings"

// Sample data for places
const VISITED_PLACES = [
  {
    id: "1",
    name: "Golden Gate Bridge",
    image: "https://source.unsplash.com/random/200x200/?goldengate",
    visited: true,
  },
  {
    id: "2",
    name: "Alcatraz Island",
    image: "https://source.unsplash.com/random/200x200/?alcatraz",
    visited: true,
  },
]

const WISHLIST_PLACES = [
  {
    id: "3",
    name: "Fisherman's Wharf",
    image: "https://source.unsplash.com/random/200x200/?fishermanswharf",
  },
  {
    id: "4",
    name: "Lombard Street",
    image: "https://source.unsplash.com/random/200x200/?lombardstreet",
  },
]

export default function ProfileScreen() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [username, setUsername] = useState("SFExplorer")
  const [visitedPlaces, setVisitedPlaces] = useState(VISITED_PLACES)
  const [wishlistPlaces, setWishlistPlaces] = useState(WISHLIST_PLACES)
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const handleAvatarUpload = (uri: string) => {
    setAvatarUrl(uri)
  }

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername)
    Alert.alert("Success", "Username updated successfully")
  }

  const handlePasswordChange = () => {
    setShowPasswordModal(true)
    // In a real app, you would implement a proper password change flow
  }

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => console.log("User logged out") },
    ])
  }

  const handleAddToVisited = () => {
    Alert.alert("Feature", "Add to visited places feature would go here")
    // In a real app, you would show a list of landmarks to add
  }

  const handleAddToWishlist = () => {
    Alert.alert("Feature", "Add to wishlist feature would go here")
    // In a real app, you would show a list of landmarks to add
  }

  const handleRemoveVisited = (id: string) => {
    setVisitedPlaces(visitedPlaces.filter((place) => place.id !== id))
  }

  const handleRemoveWishlist = (id: string) => {
    setWishlistPlaces(wishlistPlaces.filter((place) => place.id !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <Avatar url={avatarUrl} size={120} onUpload={handleAvatarUpload} />
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.bio}>San Francisco Explorer</Text>
        </View>

        <View style={styles.contentContainer}>
          <PlacesList
            title="Places I've Visited"
            places={visitedPlaces}
            emptyMessage="You haven't visited any places yet"
            onAddPlace={handleAddToVisited}
            onRemovePlace={handleRemoveVisited}
          />

          <PlacesList
            title="Places I Want to Visit"
            places={wishlistPlaces}
            emptyMessage="Your wishlist is empty"
            onAddPlace={handleAddToWishlist}
            onRemovePlace={handleRemoveWishlist}
          />

          <AccountSettings
            username={username}
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
            onLogout={handleLogout}
          />
        </View>
      </ScrollView>

      {/* Password Change Modal - In a real app, this would be more robust */}
      <Modal visible={showPasswordModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Change Password</Text>
            <Text style={styles.modalText}>Password change functionality would be implemented here in a real app.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setShowPasswordModal(false)}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 12,
  },
  bio: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  contentContainer: {
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 24,
  },
  modalButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "600",
  },
})
