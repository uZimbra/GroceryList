import {Text, TouchableOpacity, View, useColorScheme} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {currencyFormatter} from '../../utils/numberFormatUtils';
import {createStyles} from './styles';

export interface ProductListItemProp {
  id: number;
  name: string;
  quantity: number;
  price: number;
  onDelete(id: number): void;
}

export default function ProductListItem({
  id,
  name,
  quantity,
  price,
  onDelete,
}: Readonly<ProductListItemProp>): React.JSX.Element {
  const isDarkTheme = useColorScheme() === 'dark';
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemInfo}>
          <Feather name="shopping-cart" size={16} /> {quantity} x {price} ={' '}
          {currencyFormatter.format(price * quantity)}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onDelete(id)}>
        <Feather name="trash" size={20} color={'#ff4949'} />
      </TouchableOpacity>
    </View>
  );
}
