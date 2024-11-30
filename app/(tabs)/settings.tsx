import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, { useState, useEffect } from 'react'
import { useColorScheme } from 'react-native'

export default function Settings() {
  const systemTheme = useColorScheme()
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(systemTheme || 'light')

  const getContainerStyle = () => {
    const appliedTheme = theme === 'system' ? systemTheme : theme
    switch (appliedTheme) {
      case 'light':
        return 'flex-1 justify-center items-center bg-white'
      case 'dark':
        return 'flex-1 justify-center items-center bg-gray-800'
      default:
        return 'flex-1 justify-center items-center bg-gray-200'
    }
  }

  const getTextStyle = () => {
    const appliedTheme = theme === 'system' ? systemTheme : theme
    switch (appliedTheme) {
      case 'light':
        return 'text-black'
      case 'dark':
        return 'text-white'
      default:
        return 'text-gray-800'
    }
  }

  return (
    <View className={getContainerStyle()}>
      <Text className={getTextStyle()}>Settings</Text>
      <Picker
        selectedValue={theme}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Use system default" value="system" />
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />
      </Picker>
    </View>
  )
}