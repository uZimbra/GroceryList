import {StyleSheet} from 'react-native';

export function createStyles(isDarkMode: boolean) {
  return StyleSheet.create({
    button: {
      borderRadius: 5,
      backgroundColor: isDarkMode ? '#6810b5' : '#0095ff',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
    },
  });
}
