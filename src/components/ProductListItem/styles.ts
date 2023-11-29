import {StyleSheet} from 'react-native';

export function createStyles(isDarkMode: boolean) {
  return StyleSheet.create({
    container: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    info: {
      flex: 1,
    },
    itemName: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 5,
      color: '#303030',
    },
    itemInfo: {
      fontSize: 16,
      color: '#303030',
    },
    button: {
      padding: 10,
    },
  });
}
