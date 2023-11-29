import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import Input, {CustomInputProps} from '../Input/Input';

export function ControlledInput<FormType extends FieldValues>({
  control,
  name,
  ...customInputProps
}: Readonly<UseControllerProps<FormType> & CustomInputProps>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <Input
          value={value}
          onChangeText={onChange}
          error={error?.message}
          {...customInputProps}
        />
      )}
    />
  );
}
