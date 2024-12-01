import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import AddContactModal from '@/components/modals/AddContactModal';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Contacts() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ThemedView className='w-full p-3 bg-sky-400 dark:bg-gray-800'>
      <ThemedText className='bg-white'>Contacts</ThemedText>

      <TouchableOpacity
        className='bg-blue-500 p-2 m-2 rounded-md'
        onPress={() => setModalVisible(true)}
      >
        <ThemedText className='text-white'>Add Contact</ThemedText>
      </TouchableOpacity>

      <AddContactModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </ThemedView>
  );
}