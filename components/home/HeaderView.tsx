import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemedView } from '@/components/ThemedView';
import EmojiPickerModal from '@/components/emoji/EmojiPickerModal';

export function HeaderView() {
  const [mood, setMood] = React.useState('');
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("I'm feeling");
  const [message, setMessage] = React.useState('');

  const handlePickEmoji = (emoji: string) => {
    setMood(emoji);
    setShowEmoji(false);
  };

  const handleSubmit = () => {
    // Handle the submit action
    console.log('Selected Option:', selectedOption);
    console.log('Message:', message);
  };

  return (
    <ThemedView className="flex justify-start items-center p-8 min-h-15">
      <Text className="text-2xl text-blue-900 dark:text-blue-300">How are you feeling today?</Text>
      <View className="relative items-center mt-5">
        <TouchableOpacity
          onPress={() => setShowEmoji(true)}
          className="p-2 m-2 rounded-full items-center self-center bg-transparent">
          <Text className="text-8xl text-white p-4">{mood || 'Pick an emoji'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute bottom-5 right-5 bg-purple-700 dark:bg-purple-500 rounded-full w-12 h-12 justify-center items-center"
          onPress={() => setShowEmoji(true)}>
          <Text className="text-white text-2xl">✏️</Text>
        </TouchableOpacity>
      </View>

      <EmojiPickerModal
        visible={showEmoji}
        onClose={() => setShowEmoji(false)}
        onSelectEmoji={handlePickEmoji}
      />

      {/* <View className="w-full mt-5 px-4 flex-row items-center">
        <View className="flex-1 bg-white dark:bg-gray-100 border border-gray-300 dark:border-gray-600 rounded-md min-w-32 max-w-32 max-h-12">
            <Picker
            className='h-9 min-w-32'
            selectedValue={selectedOption}
            onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
            >
            <Picker.Item label="I'm feeling" value="I'm feeling" />
            <Picker.Item label="I'm not feeling" value="I'm not feeling" />
            </Picker>
        </View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
          placeholderTextColor="#9CA3AF"
          className="bg-white dark:bg-gray-800 border border-gray-300 h-12 dark:border-gray-600 p-2 flex-2 w-50"
        />
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-500 dark:bg-blue-700 rounded-md items-center flex-1 max-w-5">
          <Text className="text-white text-lg">></Text>
        </TouchableOpacity>
      </View> */}
    </ThemedView>
  );
}

export default HeaderView;