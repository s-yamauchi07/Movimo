import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native"

export default function Home() {
  return (
    <View className="w-full max-w-sm mx-auto bg-movimo-brown border-0 p-6 h-[600px] rounded-lg">
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-lg font-semibold text-white">Movimo</Text>
        <View className="w-6 h-6 bg-movimo-accent rounded-full"></View>
      </View>

      <View className="flex-1">
        <View className="mb-6">
          <Text className="text-lg font-bold mb-4 text-white">今夜見る？</Text>
          <View className="flex-row justify-between gap-3">
            <Image
              source={{ uri: "https://via.placeholder.com/80x120" }}
              className="w-[48%] h-24 rounded-lg"
              resizeMode="cover"
            />
            <Image
              source={{ uri: "https://via.placeholder.com/80x120" }}
              className="w-[48%] h-24 rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-sm text-white">アクション</Text>
            <Text className="text-sm text-white">ホラー</Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-bold mb-4 text-white">いつ見る？</Text>
          <View className="flex-row justify-between gap-3">
            <Image
              source={{ uri: "https://via.placeholder.com/80x120" }}
              className="w-[48%] h-24 rounded-lg"
              resizeMode="cover"
            />
            <Image
              source={{ uri: "https://via.placeholder.com/80x120" }}
              className="w-[48%] h-24 rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-sm text-white">ドラマ</Text>
            <Text className="text-sm text-white">ロマンス</Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-bold mb-4 text-white">誰と見る？</Text>
          <View className="flex-row justify-between gap-3">
            <Image
              source={{ uri: "https://via.placeholder.com/80x120" }}
              className="w-[48%] h-24 rounded-lg"
              resizeMode="cover"
            />
            <Image
              source={{ uri: "https://via.placeholder.com/80x120" }}
              className="w-[48%] h-24 rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-sm text-white">一人で</Text>
            <Text className="text-sm text-white">友達と</Text>
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-sm text-white">映画</Text>
            <Text className="text-sm text-white">Cut</Text>
          </View>

          <View className="items-center">
            <Text className="text-lg font-bold mb-2 text-white">時間</Text>
            <View className="flex-row justify-between w-full">
              <Text className="text-sm text-white">90分以下</Text>
              <Text className="text-sm text-white">120分以上</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity className="w-full bg-movimo-accent py-3 rounded-lg mt-6">
          <Text className="text-white text-center font-semibold">映画を探す</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
