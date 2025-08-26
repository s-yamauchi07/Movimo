import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import { router } from 'expo-router'
import { FEATURES } from '../_constants/features'
import Header from './_components/Header'
import FeatureItem from './_components/welcome/FeatureItem'

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
            className="bg-primary px-8 py-3 rounded-xl"
            onPress={() => router.push('auth/signup')}
          >
            <Text className="text-white font-medium text-base">
              Try the App
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Description Section */}
      <View className="bg-primary px-6 py-12">
        <Text className="text-white text-2xl font-bold mb-8">Movimo Features</Text>
          {FEATURES.map((feature, index) => {
            return(
              <FeatureItem 
                feature={feature}
                index={index}
                key={index}
              />
            )
          })}
      </View>
    </ScrollView>
  )
}
