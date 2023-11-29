import React, {ReactElement, cloneElement} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  useColorScheme,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStyles} from './styles';

export type CustomInputProps = {
  icon?: ReactElement;
  error?: string;
} & Omit<TextInputProps, 'style' | 'placeholderTextColor' | 'selectionColor'>;

export default function Input({
  icon,
  error,
  ...rest
}: Readonly<CustomInputProps>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode, !!error);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!!icon && cloneElement(icon, styles.icon)}
        <TextInput
          placeholderTextColor={'gray'}
          selectionColor={'black'}
          style={styles.input}
          {...rest}
        />
        {!!error &&
          cloneElement(
            <MaterialIcons name="error-outline" />,
            styles.errorIcon,
          )}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
