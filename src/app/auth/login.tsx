import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"

export default function LoginScreen() {
  return (
    <View className="flex-1 w-full mx-auto bg-primary border-0 rounded-lg p-6 h-[400px] justify-center">
      {/* Movie poster background */}
      <View className="items-center mb-8">
        <Image
          source={{ uri: "/placeholder.svg?height=120&width=200" }}
          className="w-full h-24 rounded-lg mb-6 opacity-50"
          resizeMode="cover"
        />
        <Text className="text-white text-2xl font-bold">Login</Text>
      </View>

      {/* Login form */}
      <View className="gap-4">
        <View>
          <Text className="text-movimo-gray-medium text-sm mb-2">Username</Text>
          <TextInput
            className="bg-movimo-navy border border-movimo-gray-dark text-white p-3 rounded-lg"
            placeholder="Enter username"
            placeholderTextColor="#9ca3af"
          />
        </View>

        <View>
          <Text className="text-movimo-gray-medium text-sm mb-2">Password</Text>
          <TextInput
            secureTextEntry
            className="bg-movimo-navy border border-movimo-gray-dark text-white p-3 rounded-lg"
            placeholder="Enter password"
            placeholderTextColor="#9ca3af"
          />
        </View>

        <View className="items-end">
          <TouchableOpacity>
            <Text className="text-movimo-gray-dark text-xs">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="w-full bg-movimo-orange rounded-lg py-3">
          <Text className="text-white text-center font-medium">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
