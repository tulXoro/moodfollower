import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import EmojiPickerModal from '@/components/modals/EmojiPickerModal';

export default function HeaderView() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [mood, setMood] = useState('');

  const handlePickEmoji = (emoji: string) => {
    setMood(emoji);
    setShowEmoji(false);
  };

  return (
    <ThemedView className="flex justify-start items-center p-8 min-h-15">
      <ThemedText className="text-2xl text-blue-900 dark:text-blue-300">How are you feeling today?</ThemedText>
      <ThemedView className="relative items-center mt-5">
        <TouchableOpacity
          onPress={() => setShowEmoji(true)}
          className="p-2 m-2 rounded-full items-center self-center bg-transparent">
          <ThemedText className="text-8xl text-white p-4">{mood || 'Pick an emoji'}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute bottom-5 right-5 bg-purple-700 dark:bg-purple-500 rounded-full w-12 h-12 justify-center items-center"
          onPress={() => setShowEmoji(true)}>
          <Text className="text-white text-2xl">✏️</Text>
        </TouchableOpacity>
      </ThemedView>

      <EmojiPickerModal
        visible={showEmoji}
        onClose={() => setShowEmoji(false)}
        onSelectEmoji={handlePickEmoji}
      />
    </ThemedView>
  );
}