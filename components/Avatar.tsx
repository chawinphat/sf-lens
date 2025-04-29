"use client"

import { useState, useEffect } from "react"
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from "react-native"
import * as ImagePicker from "expo-image-picker"

interface AvatarProps {
  size: number
  url: string | null
  onUpload: (uri: string) => void
}

export default function Avatar({ url, size = 150, onUpload }: AvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const avatarSize = { height: size, width: size }

  useEffect(() => {
    if (url) setAvatarUrl(url)
  }, [url])

  async function uploadAvatar() {
    try {
      setUploading(true)

      // Request permission
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (!permissionResult.granted) {
        Alert.alert("Permission Required", "You need to allow access to your photos to upload an avatar.")
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0]
        setAvatarUrl(selectedImage.uri)
        onUpload(selectedImage.uri)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message)
      }
    } finally {
      setUploading(false)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={uploadAvatar} disabled={uploading}>
        {avatarUrl ? (
          <Image
            source={{ uri: avatarUrl }}
            accessibilityLabel="Avatar"
            style={[avatarSize, styles.avatar, styles.image]}
          />
        ) : (
          <View style={[avatarSize, styles.avatar, styles.noImage]}>
            <Text style={styles.addPhotoText}>+</Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={uploadAvatar} disabled={uploading}>
        <Text style={styles.uploadButtonText}>{uploading ? "Uploading..." : "Change Photo"}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    borderRadius: 75,
    overflow: "hidden",
    backgroundColor: "#e1e1e1",
  },
  image: {
    objectFit: "cover",
  },
  noImage: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  addPhotoText: {
    fontSize: 40,
    color: "#888",
  },
  uploadButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  uploadButtonText: {
    color: "#2196F3",
    fontSize: 16,
  },
})
