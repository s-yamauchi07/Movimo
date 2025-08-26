import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"

export default function RecommendationsScreen() {
  const movies = [
    {
      title: "The Parent Trap",
      year: "1998",
      description: "Perfect for a weekend, offering just the right amount of fun and entertainment for family time.",
      image: "/placeholder.svg?height=100&width=70",
    },
    {
      title: "The Princess Bride",
      year: "1987",
      description: "A classic adventure with humor and heart, ideal for a lighthearted evening.",
      image: "/placeholder.svg?height=100&width=70",
    },
    {
      title: "Home Alone",
      year: "1990",
      description: "A nostalgic comedy that's sure to bring laughter and joy to your viewing night.",
      image: "/placeholder.svg?height=100&width=70",
    },
  ]

  return (
    <View className="w-full max-w-sm mx-auto bg-movimo-medium-blue border-0 rounded-lg p-6 h-[600px]">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center gap-3">
          <Text className="text-white text-lg">←</Text>
          <Text className="text-white text-lg font-semibold">Recommendations</Text>
        </View>
        <View className="w-6 h-6 bg-movimo-orange rounded-full"></View>
      </View>

      {/* Movie recommendations */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          {movies.map((movie, index) => (
            <View key={index} className="gap-3">
              <View className="flex-row gap-4">
                <Image
                  source={{ uri: movie.image || "/placeholder.svg" }}
                  className="w-16 h-24 rounded-lg"
                  resizeMode="cover"
                />
                <View className="flex-1">
                  <Text className="text-white font-bold text-lg mb-1">{movie.title}</Text>
                  <Text className="text-movimo-gray-medium text-sm mb-3">{movie.year}</Text>
                  <Text className="text-movimo-gray-dark text-xs leading-relaxed">{movie.description}</Text>
                </View>
              </View>
              <TouchableOpacity className="w-full bg-movimo-orange rounded-lg py-2">
                <Text className="text-white text-sm text-center font-medium">Watch Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View className="flex-row justify-center gap-8 mt-8 pt-4 border-t border-movimo-gray-dark">
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-orange rounded-full mb-1"></View>
          <Text className="text-white text-xs">Home</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Search</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Library</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Profile</Text>
        </View>
      </View>
    </View>
  )
}
