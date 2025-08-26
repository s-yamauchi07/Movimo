import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"

export default function MovieDetail() {
  const reasons = [
    { icon: "🎬", text: "Drama", description: "You love emotional stories" },
    { icon: "⭐", text: "9.3 rating", description: "Highly rated film" },
    { icon: "🏆", text: "7 nominations", description: "Award-winning movie" },
    { icon: "👥", text: "Community", description: "Popular with friends" },
  ]

  return (
    <View className="w-full max-w-sm mx-auto bg-movimo-light-blue border-0 rounded-lg p-6 h-[600px]">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-white text-lg">←</Text>
        <View className="w-6 h-6 bg-movimo-orange rounded-full"></View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Movie poster and title */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: "/placeholder.svg?height=200&width=140" }}
            className="w-32 h-48 rounded-lg mb-4"
            resizeMode="cover"
          />
          <Text className="text-white text-xl font-bold mb-2 text-center">The Shawshank Redemption</Text>
          <Text className="text-movimo-gray-medium text-sm">1994 • 2h 22m</Text>
        </View>

        {/* Description */}
        <View className="mb-6">
          <Text className="text-movimo-gray-medium text-sm leading-relaxed">
            Over the course of several years, two convicts form a friendship, seeking consolation and, eventually,
            redemption through basic compassion.
          </Text>
        </View>

        {/* Watch button */}
        <TouchableOpacity className="w-full bg-movimo-orange rounded-lg py-3 mb-6">
          <Text className="text-white text-center font-medium">Watch Now</Text>
        </TouchableOpacity>

        {/* Why we recommend this */}
        <View>
          <Text className="text-white font-semibold mb-4">Why we recommend this</Text>
          <View className="gap-3">
            {reasons.map((reason, index) => (
              <View key={index} className="flex-row items-center gap-3 bg-movimo-orange rounded-lg p-3">
                <Text className="text-lg">{reason.icon}</Text>
                <View>
                  <Text className="text-white font-semibold text-sm">{reason.text}</Text>
                  <Text className="text-white text-xs opacity-90">{reason.description}</Text>
                </View>
              </View>
            ))}
          </View>
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
          <View className="w-6 h-6 bg-movimo-gray-dark rounded-full mb-1"></View>
          <Text className="text-white text-xs">Watchlist</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 bg-movimo-orange rounded-full mb-1"></View>
          <Text className="text-white text-xs">Profile</Text>
        </View>
      </View>
    </View>
  )
}
