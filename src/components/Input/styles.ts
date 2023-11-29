import {StyleSheet} from 'react-native';

export function createStyles(isDarkMode: boolean, error?: boolean) {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginBottom: 10,
    },
    inputContainer: {
      backgroundColor: 'white',
      borderWidth: 1,
      width: '100%',
      borderRadius: 5,
      color: 'black',
      paddingHorizontal: 10,
      flexDirection: 'row',
      borderColor: error ? 'red' : '#d3d3d3',
      alignItems: 'center',
    },
    icon: {
      size: 22,
      color: 'gray',
      marginRight: 5,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: 'black',
    },
    errorIcon: {
      size: 22,
      color: '#ff4949',
    },
    error: {
      marginTop: 3,
      paddingLeft: 5,
      color: '#ff4949',
    },
  });
}
