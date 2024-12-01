import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddContactModal from '@/components/modals/AddContactModal';

export default function Contacts() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className='w-full p-3 bg-sky-400 dark:bg-gray-800'>
      <Text className='bg-white'>Contacts</Text>

      <TouchableOpacity
        className='bg-blue-500 p-2 m-2 rounded-md'
        onPress={() => setModalVisible(true)}
      >
        <Text className='text-white'>Add Contact</Text>
      </TouchableOpacity>

      <AddContactModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
}