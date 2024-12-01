import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, FlatList, TouchableOpacity, useColorScheme } from 'react-native';

const AddContactModal: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pendingInvites, setPendingInvites] = useState<string[]>([]);
  const [pendingRequests, setPendingRequests] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('addFriend');
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className={`flex-1 justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} bg-opacity-50`}>
        <View className={`p-4 rounded-lg w-11/12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <Text className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Add Contacts</Text>
          
          <View className="flex-row justify-around mb-4">
            <TouchableOpacity onPress={() => setActiveTab('addFriend')}>
              <Text className={`text-base font-semibold ${activeTab === 'addFriend' ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Add Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('pendingInvites')}>
              <Text className={`text-base font-semibold ${activeTab === 'pendingInvites' ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending Invites</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('pendingRequests')}>
              <Text className={`text-base font-semibold ${activeTab === 'pendingRequests' ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending Requests</Text>
            </TouchableOpacity>
          </View>

          <View className='p-6'>
          {activeTab === 'addFriend' && (
            <View className="mb-4">
              <Text className={`text-base font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Add Friend</Text>
              <TextInput
                className={`border p-2 rounded ${isDarkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                placeholder="Search for a user"
                placeholderTextColor={isDarkMode ? 'gray' : 'darkgray'}
                value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={handleSearch}
              />
              <TouchableOpacity onPress={handleSearch} className="mt-2 bg-blue-500 p-2 rounded">
                <Text className="text-white text-center">Search</Text>
              </TouchableOpacity>
            </View>
          )}

          {activeTab === 'pendingInvites' && (
            <View className="mb-4">
              <Text className={`text-base font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Pending Invites</Text>
              <FlatList
                data={pendingInvites}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text className={`p-2 border-b ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-black'}`}>{item}</Text>}
              />
            </View>
          )}

          {activeTab === 'pendingRequests' && (
            <View className="mb-4">
              <Text className={`text-base font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Pending Requests</Text>
              <FlatList
                data={pendingRequests}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text className={`p-2 border-b ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-black'}`}>{item}</Text>}
              />
            </View>
          )}
          </View>


          
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default AddContactModal;