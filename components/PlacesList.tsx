import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

interface Place {
  id: string
  name: string
  image: string
  visited?: boolean
}

interface PlacesListProps {
  title: string
  places: Place[]
  emptyMessage: string
  onAddPlace?: () => void
  onRemovePlace?: (id: string) => void
}

export default function PlacesList({ title, places, emptyMessage, onAddPlace, onRemovePlace }: PlacesListProps) {
  const renderItem = ({ item }: { item: Place }) => (
    <View style={styles.placeItem}>
      <Image source={{ uri: item.image }} style={styles.placeImage} />
      <View style={styles.placeDetails}>
        <Text style={styles.placeName}>{item.name}</Text>
        {item.visited && (
          <View style={styles.visitedBadge}>
            <Text style={styles.visitedText}>Visited</Text>
          </View>
        )}
      </View>
      {onRemovePlace && (
        <TouchableOpacity style={styles.removeButton} onPress={() => onRemovePlace(item.id)}>
          <Feather name="x" size={18} color="#FF6B6B" />
        </TouchableOpacity>
      )}
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onAddPlace && (
          <TouchableOpacity onPress={onAddPlace}>
            <Feather name="plus" size={24} color="#2196F3" />
          </TouchableOpacity>
        )}
      </View>

      {places.length > 0 ? (
        <FlatList
          data={places}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.list}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{emptyMessage}</Text>
          {onAddPlace && (
            <TouchableOpacity style={styles.addButton} onPress={onAddPlace}>
              <Text style={styles.addButtonText}>Add Places</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    maxHeight: 300,
  },
  placeItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  placeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  placeDetails: {
    flex: 1,
    marginLeft: 12,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "500",
  },
  visitedBadge: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  visitedText: {
    color: "#2196F3",
    fontSize: 12,
    fontWeight: "500",
  },
  removeButton: {
    padding: 8,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 24,
  },
  emptyText: {
    color: "#888",
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "500",
  },
})
