import React from 'react'
import { View, Text, Image, ScrollView } from "react-native"

export default function MyMoviesScreen() {
  const movies = [
    {
      title: "The Lost City",
      description: "Brilliant, but reclusive author Loretta Sage has spent her career writing about exotic places.",
      image: "/placeholder.svg?height=80&width=60",
      watched: true,
    },
    {
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      image: "/placeholder.svg?height=80&width=60",
      watched: true,
    },
    {
      title: "A Quiet Place",
      description: "A family lives in silence while hiding from creatures that hunt by sound.",
      image: "/placeholder.svg?height=80&width=60",
      watched: true,
    },
  ]

  return (
    <View className="w-full max-w-sm mx-auto bg-movimo-medium-blue border-0 rounded-lg p-6 h-[600px]">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center gap-3">
          <Text className="text-white text-lg">←</Text>
          <Text className="text-white text-lg font-semibold">My Movies</Text>
        </View>
        <View className="w-6 h-6 bg-movimo-orange rounded-full"></View>
      </View>

      {/* Section header */}
      <View className="mb-6">
        <Text className="text-movimo-orange text-sm font-semibold mb-4">WATCHED</Text>
      </View>

      {/* Movie list */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="gap-4">
          {movies.map((movie, index) => (
            <View key={index} className="flex-row gap-4 items-start">
              <Image
                source={{ uri: movie.image || "/placeholder.svg" }}
                className="w-12 h-18 rounded-lg"
                resizeMode="cover"
              />
              <View className="flex-1">
                <Text className="text-white font-semibold text-sm mb-1">{movie.title}</Text>
                <Text className="text-movimo-gray-dark text-xs leading-relaxed mb-2">{movie.description}</Text>
                <View className="flex-row items-center gap-2">
                  <Text className="text-movimo-gray-medium text-xs">Action, Adventure</Text>
                  {movie.watched && <Text className="text-movimo-orange text-sm">✓</Text>}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View className="flex-row justify-center gap-8 mt-8 pt-4 border-t border-movimo-gray-dark">
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Home</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Search</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-orange rounded-full mb-1"></View>
          <Text className="text-white text-xs">Watchlist</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Profile</Text>
        </View>
      </View>
    </View>
  )
}
