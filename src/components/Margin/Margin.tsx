import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  marginVertical?: number;
  marginHorizontal?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function Margin(props: MarginProps): JSX.Element {
  return (
    <View
      style={{
        marginVertical: props.marginVertical,
        marginHorizontal: props.marginHorizontal,
        marginTop: props.top,
        marginBottom: props.bottom,
        marginLeft: props.left,
        marginRight: props.right,
      }}
    />
  );
}
