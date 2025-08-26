import React from 'react'
import { View, Text, TextInput } from 'react-native'

interface formInputProps {
  label: string
  placeholder: string
  secureTextEntry?: boolean
}

const FormInput = ({ label, placeholder, secureTextEntry}: formInputProps): React.JSX.Element => {
  return(
    <View className="mb-4">
      <Text className="text-sm text-white mb-2">{label}</Text>
      <TextInput
        className="bg-secondary border-0 text-white p-3 rounded-xl"
        placeholder={placeholder}
        placeholderTextColor="#94a6c7"
        secureTextEntry={label === "Password" ? true : secureTextEntry}
      />
    </View>
  )
}

export default FormInput 