import CurrencyInput, {CurrencyInputProps} from 'react-native-currency-input';

import React, {ReactElement, cloneElement} from 'react';
import {Text, View, useColorScheme} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStyles} from './styles';

export type CustomMoneyInputProps = {
  icon?: ReactElement;
  error?: string;
} & CurrencyInputProps;

export default function MoneyInput({
  icon,
  error,
  ...currencyInputProps
}: Readonly<CustomMoneyInputProps>) {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode, !!error);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {!!icon && cloneElement(icon, styles.icon)}
        <CurrencyInput
          placeholderTextColor={'gray'}
          selectionColor={'black'}
          style={styles.input}
          {...currencyInputProps}
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
