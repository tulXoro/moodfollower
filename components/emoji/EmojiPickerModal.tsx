import React, { useState } from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, ScrollView, TextInput, useColorScheme } from 'react-native';
import emojiData from 'emoji-datasource';

interface EmojiPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectEmoji: (emoji: string) => void;
}

const categories = {
  'Smileys & Emotion': [],
  'People & Body': [],
  'Animals & Nature': [],
  'Food & Drink': [],
  'Activities': [],
  'Travel & Places': [],
  'Objects': [],
  'Symbols': [],
  'Flags': [],
};

emojiData.forEach((emoji) => {
  const category = emoji.category;
  if (categories[category]) {
    categories[category].push({
      emoji: String.fromCodePoint(...emoji.unified.split('-').map((u) => parseInt(u, 16))),
      name: emoji.short_name,
    });
  }
});

const EmojiPickerModal: React.FC<EmojiPickerModalProps> = ({ visible, onClose, onSelectEmoji }) => {
  const [selectedCategory, setSelectedCategory] = useState('Smileys & Emotion');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryNames = Object.keys(categories);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const filteredEmojis = categories[selectedCategory].filter((emoji) =>
    emoji.name.includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className={`flex-1 justify-center items-center ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'}`}>
        <View className={`w-11/12 h-3/4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4`}>
          <Text className={`text-lg mb-2 font-semibold text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Select an Emoji</Text>
          <TextInput
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className={`w-full p-2 mb-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          />
          <View className="h-12">
            <FlatList
              data={categoryNames}
              horizontal
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelectedCategory(item)} className={`p-2 m-1 rounded ${item === selectedCategory ? 'bg-blue-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <Text className={`text-xs ${item === selectedCategory ? 'text-white' : isDarkMode ? 'text-white' : 'text-black'}`}>{item}</Text>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 4 }}
            />
          </View>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }} className="flex-1 w-full mt-2">
            <FlatList
              data={filteredEmojis}
              numColumns={8}
              keyExtractor={(item) => item.emoji}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onSelectEmoji(item.emoji)} className="m-1">
                  <Text className="text-2xl">{item.emoji}</Text>
                </TouchableOpacity>
              )}
              scrollEnabled={false} // Disable scrolling in FlatList to use ScrollView
            />
          </ScrollView>
          <TouchableOpacity onPress={onClose} className="mt-2 p-2 bg-blue-500 rounded-full w-24 items-center self-center">
            <Text className="text-white text-base">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EmojiPickerModal;