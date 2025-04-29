"use client"

import { useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, Alert } from "react-native"
import { Feather } from "@expo/vector-icons"

interface AccountSettingsProps {
  username: string
  onUsernameChange: (username: string) => void
  onPasswordChange: () => void
  onLogout: () => void
}

export default function AccountSettings({
  username,
  onUsernameChange,
  onPasswordChange,
  onLogout,
}: AccountSettingsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [tempUsername, setTempUsername] = useState(username)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [locationEnabled, setLocationEnabled] = useState(true)

  const handleSave = () => {
    if (tempUsername.trim() === "") {
      Alert.alert("Error", "Username cannot be empty")
      return
    }

    onUsernameChange(tempUsername)
    setIsEditing(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Account Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Username</Text>
        <View style={styles.inputContainer}>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={tempUsername}
              onChangeText={setTempUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
          ) : (
            <Text style={styles.settingValue}>{username}</Text>
          )}

          {isEditing ? (
            <TouchableOpacity onPress={handleSave}>
              <Feather name="check" size={20} color="#2196F3" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Feather name="edit-2" size={18} color="#888" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={onPasswordChange}>
        <Text style={styles.settingLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.settingValue}>••••••••</Text>
          <Feather name="chevron-right" size={20} color="#888" />
        </View>
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#d1d1d1", true: "#bae6fd" }}
          thumbColor={notificationsEnabled ? "#2196F3" : "#f4f3f4"}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Location Services</Text>
        <Switch
          value={locationEnabled}
          onValueChange={setLocationEnabled}
          trackColor={{ false: "#d1d1d1", true: "#bae6fd" }}
          thumbColor={locationEnabled ? "#2196F3" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingLabel: {
    fontSize: 16,
    color: "#333",
  },
  settingValue: {
    fontSize: 16,
    color: "#666",
    marginRight: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#2196F3",
    marginRight: 8,
    padding: 4,
    minWidth: 120,
    textAlign: "right",
  },
  logoutButton: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 24,
  },
  logoutText: {
    color: "#FF6B6B",
    fontWeight: "600",
    fontSize: 16,
  },
})
