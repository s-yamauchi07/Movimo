import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { Zap, Heart, Clock } from 'lucide-react-native'
import { router } from 'expo-router'
import Header from './_component/Header'


export default function Index() {
  return (
    <ScrollView className="flex-1 w-full mx-auto bg-primary border-0 rounded-lg">
      <Header />

      {/* Hero Section */}
      <View className="relative bg-dark px-6 py-16 items-center">
        {/* Theater spotlight effect */}
        <View className="absolute inset-0 items-center justify-center">
          <View className="w-32 h-64 bg-blue-400/30 rounded-full blur-xl" />
        </View>

        {/* Floating popcorn */}
        <View className="relative z-10 mb-8 items-center">
          <View className="w-16 h-16 mb-4 items-center justify-center">
            <Text className="text-4xl">🍿</Text>
          </View>
        </View>

        {/* Text and Button */}
        <View className="relative z-10 items-center">
          <Text className="text-white text-4xl font-bold mb-4 text-center leading-tight">
            Movies for this{`\n`}moment 🍿
          </Text>

          <Text className="text-white/80 text-lg mb-8 max-w-sm text-center leading-relaxed">
            Find the perfect movie with Movimo. Discover films tailored to your
            mood, situation, and company.
          </Text>

          <TouchableOpacity 
            className="bg-primary px-8 py-3 rounded-lg"
            onPress={() => router.push('auth/signup')}
          >
            <Text className="text-white font-medium text-base">
              Try the App
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Description Section */}
    <View className="bg-[#0a2342] px-6 py-12">
      <Text className="text-white text-2xl font-bold mb-8">Movimo Features</Text>

      {/* Feature 1 */}
      <View className="flex-row items-start mb-6">
        <View className="bg-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center mr-4">
          <Heart size={32} color="#4b5563" /> 
        </View>
        <View className="flex-1">
          <Text className="text-accent text-lg font-semibold mb-2">
            Find movies in 3 taps
          </Text>
          <Text className="text-white/80 text-sm leading-relaxed">
            Select your mood, situation, and company, and Movimo will find the
            perfect movie for you.
          </Text>
        </View>
      </View>

      {/* Feature 2 */}
      <View className="flex-row items-start mb-6">
        <View className="bg-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center mr-4">
          <Zap size={32} color="#253546" />
        </View>
        <View className="flex-1">
          <Text className="text-accent text-lg font-semibold mb-2">
            Top 3 suggestions
          </Text>
          <Text className="text-white/80 text-sm leading-relaxed">
            Movimo presents only the top 3 movie choices, so you can quickly
            decide what to watch.
          </Text>
        </View>
      </View>

      {/* Feature 3 */}
      <View className="flex-row items-start">
        <View className="bg-accent rounded-2xl p-4 w-16 h-16 flex items-center justify-center mr-4">
          <Clock size={32} color="#0a2342" />
        </View>
        <View className="flex-1">
          <Text className="text-[#ff8533] text-lg font-semibold mb-2">
            Recommendations with
          </Text>
          <Text className="text-white/80 text-sm leading-relaxed">
            Movimo displays the rationale behind each suggestion with tags like
            90min, family-friendly, and perfect for weeknights.
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}
