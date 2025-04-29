"use client"

import { useState, useEffect } from "react"
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"

interface ProfileButtonProps {
  avatarUrl?: string | null
  username?: string
  size?: "small" | "medium" | "large"
  showLabel?: boolean
  style?: object
}

export default function ProfileButton({
  avatarUrl = null,
  username = "Profile",
  size = "medium",
  showLabel = false,
  style = {},
}: ProfileButtonProps) {
  const navigation = useNavigation()
  const [dimensions, setDimensions] = useState({ width: 40, height: 40 })

  useEffect(() => {
    // Set dimensions based on size prop
    switch (size) {
      case "small":
        setDimensions({ width: 32, height: 32 })
        break
      case "large":
        setDimensions({ width: 48, height: 48 })
        break
      default:
        setDimensions({ width: 40, height: 40 })
    }
  }, [size])

  const handlePress = () => {
    // Navigate to the profile screen
    // @ts-ignore - We're ignoring the type checking here since we're using a string for navigation
    navigation.navigate("Profile")
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityLabel="Go to profile"
      accessibilityRole="button"
    >
      <View style={[styles.avatarContainer, { width: dimensions.width, height: dimensions.height }]}>
        {avatarUrl ? (
          <Image
            source={{ uri: avatarUrl }}
            style={[styles.avatar, { width: dimensions.width, height: dimensions.height }]}
          />
        ) : (
          <View style={[styles.placeholderAvatar, { width: dimensions.width, height: dimensions.height }]}>
            <Feather name="user" size={dimensions.width * 0.5} color="#ffffff" />
          </View>
        )}
      </View>

      {showLabel && <Text style={styles.label}>{username}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
  avatarContainer: {
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  placeholderAvatar: {
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
  },
})
