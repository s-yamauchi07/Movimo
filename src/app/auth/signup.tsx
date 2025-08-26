import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"

export default function Signup() {
  return (
    <View className="w-full max-w-sm mx-auto bg-movimo-primary p-6 h-[600px] rounded-lg">
      <View className="flex-row items-center justify-between mb-8">
        <Text className="text-lg font-semibold text-white">Movimo</Text>
        <View className="w-6 h-6 bg-movimo-accent rounded-full"></View>
      </View>

      <Text className="text-xl font-bold mb-8 text-white">Find movies that match{"\n"}you</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <View className="mb-4">
            <Text className="text-sm text-movimo-gray mb-2">Name</Text>
            <TextInput
              className="bg-movimo-secondary border-0 text-white p-3 rounded-lg"
              placeholder="Your name"
              placeholderTextColor="#94a6c7"
            />
          </View>

          <View className="mb-4">
            <Text className="text-sm text-movimo-gray mb-2">Email</Text>
            <TextInput
              className="bg-movimo-secondary border-0 text-white p-3 rounded-lg"
              placeholder="your@email.com"
              placeholderTextColor="#94a6c7"
            />
          </View>

          <View className="mb-4">
            <Text className="text-sm text-movimo-gray mb-2">Password</Text>
            <TextInput
              className="bg-movimo-secondary border-0 text-white p-3 rounded-lg"
              placeholder="••••••••"
              placeholderTextColor="#94a6c7"
              secureTextEntry
            />
          </View>
        </View>

        <View className="mb-6">
          <View className="flex-row gap-2 mb-4">
            <TouchableOpacity className="bg-movimo-secondary px-4 py-2 rounded-lg">
              <Text className="text-white text-sm">New</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-movimo-secondary px-4 py-2 rounded-lg">
              <Text className="text-white text-sm">Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-movimo-secondary px-4 py-2 rounded-lg">
              <Text className="text-white text-sm">Other</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text className="text-sm text-movimo-gray mb-2">Age</Text>
            <TextInput
              className="bg-movimo-secondary border-0 text-white p-3 rounded-lg"
              placeholder="25"
              placeholderTextColor="#94a6c7"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold mb-3 text-white">Favorite Movie Genres</Text>
          <View className="flex-row flex-wrap justify-between">
            {[
              { name: "Action", image: "https://via.placeholder.com/60x80" },
              { name: "Comedy", image: "https://via.placeholder.com/60x80" },
              { name: "Drama", image: "https://via.placeholder.com/60x80" },
              { name: "Sci-Fi", image: "https://via.placeholder.com/60x80" },
              { name: "Horror", image: "https://via.placeholder.com/60x80" },
              { name: "Thriller", image: "https://via.placeholder.com/60x80" },
            ].map((genre) => (
              <View key={genre.name} className="w-[48%] mb-3 items-center">
                <Image source={{ uri: genre.image }} className="w-full h-20 rounded-lg mb-2" resizeMode="cover" />
                <Text className="text-xs text-movimo-gray">{genre.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity className="w-full bg-movimo-accent py-3 rounded-lg">
          <Text className="text-white text-center font-semibold">Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
