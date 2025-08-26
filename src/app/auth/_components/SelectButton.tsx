import React from 'react'
import { Text, TouchableOpacity } from "react-native"

interface GenderProps {
  selectedGender: string
  genderLabel: string
  setGender: (genderLabel: string) => void
  index?: number
}

const SelectButton = ({ genderLabel, selectedGender, setGender } : GenderProps):React.JSX.Element  => {
  return(
    <TouchableOpacity 
      className={`px-4 py-2 mr-2 rounded-xl ${genderLabel === selectedGender ? 'bg-accent' : 'bg-secondary'}`}
      onPress={() => setGender(genderLabel)}
    >
      <Text className="text-white text-sm">{genderLabel}</Text>
    </TouchableOpacity>
  )
}

export default SelectButton