import React from 'react'
import { View, Text } from 'react-native'
import { Download } from 'lucide-react-native'

const Header = ():React.JSX.Element => {
  return(
    <View className="bg-primary px-6 py-4 flex-row justify-between items-center">
      <Text className="text-white text-xl font-semibold">Movimo</Text>
      <Download className="text-white" size={24} />
    </View>
  )
}

export default Header