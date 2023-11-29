import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  useColorScheme,
} from 'react-native';
import {createStyles} from './styles';

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  text: string;
}

export default function Button(props: Readonly<ButtonProps>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.button} {...props}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
