import { View, Text, TouchableOpacity } from 'react-native'


export default function Contacts() {
  return (
    <View className='w-full p-3 bg-sky-400 dark:bg-gray-800'>
      <Text className='bg-white'>Contacts</Text>

      <TouchableOpacity className='bg-blue-500 p-2 m-2 rounded-md'>
        <Text className='text-white'>Add Contact</Text>
    </TouchableOpacity>
    </View>
  )
}

