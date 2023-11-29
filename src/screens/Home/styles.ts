import {StyleSheet} from 'react-native';

export function createStyles(isDarkMode?: boolean) {
  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? '#454545' : '#eaeaea',
      padding: 20,
    },
    screenTitle: {
      fontSize: 22,
      marginBottom: 30,
      color: isDarkMode ? '#f7faf8' : '#454545',
    },
    listDescriptionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    text: {
      paddingHorizontal: 5,
      fontSize: 18,
      color: isDarkMode ? 'lightgray' : 'black',
    },
    totalContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 80,
      backgroundColor: isDarkMode ? '#2b2b2b' : 'lightgray',
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
}
