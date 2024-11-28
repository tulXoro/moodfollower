import React from 'react';
import { View, Text, Button } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import EmojiPickerModal from '@/components/emoji/EmojiPickerModal';

export function HeaderView() {
  const [mood, setMood] = React.useState('');
  const [showEmoji, setShowEmoji] = React.useState(false);

  const handlePickEmoji = (emoji: string) => {
    setMood(emoji);
    setShowEmoji(false);
  };

  return (
    <ThemedView className="flex justify-start items-center p-30 min-h-60">
      <Text className='text-2xl text-blue-900'>How are you feeling today?</Text>
      <Button title={mood || 'Pick an emoji'} onPress={() => setShowEmoji(true)} />

      <Text className="text-lg text-red-900">This is a top center component</Text>

      <EmojiPickerModal
        visible={showEmoji}
        onClose={() => setShowEmoji(false)}
        onSelectEmoji={handlePickEmoji}
      />
    </ThemedView>
  );
}

export default HeaderView;