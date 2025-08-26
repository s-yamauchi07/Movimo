import React from 'react'
import { View, Text } from 'react-native'
import { featureType } from '../../../_types/welcome/featureType'

interface featureProps {
  feature: featureType,
  index: number
}

const FeatureItem = ({ feature, index }: featureProps): React.JSX.Element => {
  return(
    <View className="flex-row items-start mb-10">
      <View 
        key={index}
        className="bg-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center mr-4"
      >
        <feature.icon size={32} color="#0a2342" />
      </View>
      <View className="flex-1">
        <Text className="text-accent text-lg font-semibold mb-2">
          {feature.title}
        </Text>
        <Text className="text-white/80 text-sm leading-relaxed">
          {feature.description}
        </Text>
      </View>
    </View>
  )
}

export default FeatureItem