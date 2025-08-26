import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import SelectButton from './_components/SelectButton';

export default function Signup() {
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState(null)

  const ageOptions = Array.from({ length: 100 }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }));

  const genderOptions = ['man', 'woman', 'other']

  return (
    <View className="flex-1 w-full mx-auto bg-primary p-6 h-[600px] rounded-xl">
      <Text className="text-2xl font-bold mb-8 text-white">ぴったりの映画を見つけよう🍿</Text>

      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6">
          <View className="mb-4">
            <Text className="text-sm text-white mb-2">Name</Text>
            <TextInput
              className="bg-secondary border-0 text-white p-3 rounded-xl"
              placeholder="Your name"
              placeholderTextColor="#94a6c7"
            />
          </View>

          <View className="mb-4">
            <Text className="text-sm text-white mb-2">Email</Text>
            <TextInput
              className="bg-secondary border-0 text-white p-3 rounded-xl"
              placeholder="your@email.com"
              placeholderTextColor="#94a6c7"
            />
          </View>

          <View className="mb-4">
            <Text className="text-sm text-white mb-2">Password</Text>
            <TextInput
              className="bg-secondary border-0 text-white p-3 rounded-xl"
              placeholder="••••••••"
              placeholderTextColor="#94a6c7"
              secureTextEntry
            />
          </View>
        </View>

        <View className="mb-6">
          <View className="flex-row mb-4">
            {genderOptions.map((label, index) => (
              <SelectButton 
                selectedGender={gender}
                genderLabel={label}
                setGender={setGender}
                key={index}
              />
            ))}
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-sm text-white mb-2">Age</Text>
          <RNPickerSelect
            onValueChange={(value) => setAge(value)}
            placeholder={{ label: 'Select age', value: null }}
            items={ageOptions}
            value={age}
            useNativeAndroidPickerStyle={false}
            style={{
              inputIOS: {
                backgroundColor: '#2a2e43',
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12, // TextInputの角丸に合わせて調整
                color: 'white',
              },
              inputAndroid: {
                backgroundColor: '#2a2e43',
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12, // TextInputの角丸に合わせて調整
                color: 'white',
              },
              placeholder: { color: '#94a6c7' },
              iconContainer: {
                top: '50%',
                right: 15,
                transform: [{ translateY: -8 }], // アイコンを垂直方向の中央に配置
              },
            }}
            Icon={() => (
              <Text style={{ color: 'white', fontSize: 16 }}>▼</Text>
            )}
          />
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
                <Image source={{ uri: genre.image }} className="w-full h-20 rounded-xl mb-2" resizeMode="cover" />
                <Text className="text-xs text-white">{genre.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity className="w-full bg-accent py-3 rounded-xl">
          <Text className="text-white text-center font-semibold">Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
