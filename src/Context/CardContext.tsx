import * as React from "react";
import { customAlphabet } from 'nanoid'
import useEffectOnce from '../hooks/useOnceEffect'
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  altText: string;
  rating: { rate: number; count: number };
  stock: number;
  quantity: number;
  pricexqtty: number;
}

export const ContextCard = React.createContext({} as ICartItem | number | any);

const CardContext: React.FC<any> = ({ children }): JSX.Element => {

  const [productObj, setProductObj] = React.useState<any>();
  const [orderId, setOrderId] = React.useState<string | any>();
  const [cart, setCart] = React.useState<ICartItem[]>([]);
  const [totalOrder, setTotalOrder] = React.useState<number>(0);
  const [totalUnits, setTotalUnits] = React.useState<number>(0);

  const nanoid = customAlphabet('1234567890', 10)

  useEffectOnce(() => {
    if(isEmpty(cart)) {
      setOrderId(nanoid())
    };
  })


  const isEmpty = (val: any) =>
    val == null || !(Object.keys(val) || val).length;
  const isInCart = (val: any, id: number) =>
    val.some((item: { id: number }) => item.id === id);
  const removeItem = (val: any, id: number) =>
    val.filter((item: { id: number }) => item.id !== id);
  const getItem = (val: any, id: number) =>
    val.find((item: { id: number }) => item.id === id);  
  const clearItems = (val: any) => (val.lenght = 0);
  const totalPrice = (val: any) => val.reduce((_total: number, item: { pricexqtty: number; }) => item.pricexqtty + _total, 0);
  const totalQtty = (val: any) =>
    val.reduce((_total: number, item: { quantity: number }) => item.quantity + _total, 0);

    const setQtty = (objProduct: { quantity: number; stock: number; }, count: number, operator: string): number => {
      let realQuantityProduct: number = 0
      operator === "+" 
      ?
        (realQuantityProduct = !('quantity' in objProduct) ? count : (objProduct.quantity + count)) 
      :
        (realQuantityProduct = !('quantity' in objProduct) ? count : (objProduct.quantity - count)) 
      realQuantityProduct = (realQuantityProduct > objProduct.stock) ? objProduct.stock : realQuantityProduct; 
      return realQuantityProduct;
    }

    const setPrice = (objProduct: { price: number; quantity: number; }): number => {
      let realPriceXProductSelected: number = 0;
      realPriceXProductSelected = (objProduct.price * objProduct.quantity);
      return realPriceXProductSelected;
    }

    const addItem = (item: ICartItem) => {
      if(isEmpty(cart)) {
        setCart([...cart, item]);
      } else if (!isInCart(cart, item.id)) {
        setCart([...cart, item]);
      } else if (isInCart(cart, item.id)) {
        let newArray = [...cart];
        setCart(newArray)
      }
    }

    React.useEffect(() => {
      if (!isEmpty(cart)) {
        setTotalOrder(totalPrice(cart));
        setTotalUnits(totalQtty(cart));
      } else {
        setTotalOrder(totalPrice(cart));
        setTotalUnits(totalQtty(cart));
      }
    }, [cart, productObj, totalOrder, totalUnits]);
    

  return (
    <ContextCard.Provider
      value={{
        orderId: orderId,
        productObj: productObj,
        setProductObj: setProductObj,
        addItem: addItem,
        removeItem: removeItem,
        totalOrder: totalOrder,
        clearItems:clearItems,
        totalUnits: totalUnits,
        setQtty: setQtty,
        setPrice: setPrice,
        getItem: getItem,
        cart: cart,
        setCart: setCart,
        isEmpty: isEmpty,
      }}
    >
      {children}
    </ContextCard.Provider>
  );
};
export default CardContext;
