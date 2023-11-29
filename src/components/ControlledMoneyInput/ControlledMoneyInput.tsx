import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import MoneyInput, {CustomMoneyInputProps} from '../MoneyInput/MoneyInput';

export function ControlledMoneyInput<FormType extends FieldValues>({
  control,
  name,
  ...customInputProps
}: Readonly<
  UseControllerProps<FormType> & Omit<CustomMoneyInputProps, 'value'>
>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <MoneyInput
          value={value}
          onChangeValue={onChange}
          error={error?.message}
          {...customInputProps}
        />
      )}
    />
  );
}
