import {zodResolver} from '@hookform/resolvers/zod';
import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {z} from 'zod';
import Button from '../../components/Button/Button';
import {ControlledInput} from '../../components/ControlledInput/ControlledInput';
import {ControlledMoneyInput} from '../../components/ControlledMoneyInput/ControlledMoneyInput';
import Margin from '../../components/Margin/Margin';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import Separator from '../../components/Separator/Separator';
import {useProducts} from '../../contexts/products';
import {useTheme} from '../../contexts/theme';
import {Product} from '../../domain/Product';
import {generateUniqueId} from '../../utils/idGenerator';
import {currencyFormatter} from '../../utils/numberFormatUtils';
import {createStyles} from './styles';

const formSchema = z.object({
  name: z
    .string({required_error: 'Preecha o campo nome'})
    .min(1, {message: 'O campo nome não pode ser vazio'})
    .trim(),
  quantity: z
    .string({required_error: 'Preencha o campo quantidade'})
    .min(1, {message: 'A quantidade deve ser pelo menos 1'})
    .refine(value => /^\d+$/.test(value)),
  price: z
    .number({required_error: 'Preencha o campo preço'})
    .min(0.01, {message: 'O preço deve ser pelo menos 0,01'}),
});

type formSquemaType = z.infer<typeof formSchema>;

export default function Home(): JSX.Element {
  const styles = createStyles();
  const {theme, toggleTheme} = useTheme();
  const {productList, addProduct, handleDeleteProduct} = useProducts();
  const {control, handleSubmit} = useForm<formSquemaType>({
    resolver: zodResolver(formSchema),
  });

  function submitProductForm(data: formSquemaType) {
    const prod = {
      id: generateUniqueId(),
      name: data.name,
      quantity: Number(data.quantity),
      price: Number(data.price),
    } as Product;

    addProduct(prod);
  }

  const renderProduct = useCallback(
    ({item}: any) => (
      <ProductListItem product={item} onDelete={handleDeleteProduct} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <Text style={styles.screenTitle}>Lista de compras</Text>
        <Feather
          name={theme ? 'moon' : 'sun'}
          color="black"
          size={30}
          onPress={() => toggleTheme(!theme)}
        />
      </View>
      <ControlledInput
        control={control}
        name="name"
        icon={<Feather name="shopping-cart" />}
        placeholder="Nome do Produto"
      />
      <ControlledInput
        control={control}
        name="quantity"
        icon={<MaterialIcons name="numbers" />}
        placeholder="Quantidade"
        keyboardType="decimal-pad"
      />
      <ControlledMoneyInput
        control={control}
        name="price"
        icon={<MaterialIcons name="attach-money" />}
        placeholder="Preço"
        keyboardType="numeric"
      />
      <Button text="Cadastrar" onPress={handleSubmit(submitProductForm)} />
      {productList.length > 0 && (
        <>
          <Margin bottom={40} />
          <View style={styles.listDescriptionContainer}>
            <Text style={styles.text}>Itens</Text>
            <Text style={styles.text}>{productList.length}</Text>
          </View>
          <Separator />
          <Margin bottom={20} />
          <FlatList
            data={productList}
            renderItem={renderProduct}
            ItemSeparatorComponent={() => <Margin bottom={7} />}
            showsVerticalScrollIndicator={false}
          />

          <Margin bottom={70} />
          <View style={styles.totalContainer}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>
              {currencyFormatter.format(
                productList
                  .map(p => p.price * p.quantity)
                  .reduce((current, next) => current + next),
              )}
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
