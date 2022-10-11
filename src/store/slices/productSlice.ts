import { IProduct } from 'src/types/IProduct';
import { createSlice, current } from '@reduxjs/toolkit';
import Product1 from 'src/assets/Image.png';
import Product2 from 'src/assets/Image2.png';
import Product3 from 'src/assets/Image3.png';
import Product4 from 'src/assets/Image4.png';
import Product5 from 'src/assets/Image5.png';
import Product6 from 'src/assets/Image6.png';

interface ProductState {
  productList:IProduct[];
  productsInBasket:IProduct[] | null;
}

const initialState:ProductState = {
  productList: [
    {
      image: Product1,
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      id: '1',
      count_in_basket: 0,
    },
    {
      image: Product2,
      title: 'Apple EarPods',
      price: 2327,
      rate: 3.7,
      id: '2',
      count_in_basket: 0,
    },
    {
      image: Product3,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
      id: '3',
      count_in_basket: 0,
    },
    {
      image: Product1,
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      id: '4',
      count_in_basket: 0,
    },
    {
      image: Product2,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
      id: '5',
      count_in_basket: 0,
    },
    {
      image: Product3,
      title: 'Apple EarPods',
      price: 2327,
      rate: 4.5,
      id: '6',
      count_in_basket: 0,
    },
    {
      image: Product4,
      title: 'Apple AirPods',
      price: 9527,
      rate: 4.7,
      id: '7',
      count_in_basket: 0,
    },
    {
      image: Product5,
      title: 'GERLAX GH-04',
      price: 6527,
      rate: 4.7,
      id: '8',
      count_in_basket: 0,
    },
    {
      image: Product6,
      title: 'BOROFONE BO4',
      price: 7527,
      rate: 4.7,
      id: '9',
      count_in_basket: 0,
    },
  ],
  productsInBasket: null,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addInBasket: (state, action) => {
      if (state.productsInBasket) {
        if (!current(state.productsInBasket).filter((item) => item.id === action.payload.id).length) {
          const product = { ...action.payload, count_in_basket: action.payload.count_in_basket + 1 };
          state.productsInBasket = [...state.productsInBasket, product];
        } else {
          state.productsInBasket = state.productsInBasket.map((item) => {
            if (item.id !== action.payload.id) return item;
            else return { ...item, count_in_basket: item.count_in_basket + 1 };
          });
        }
      } else state.productsInBasket = [{ ...action.payload, count_in_basket: action.payload.count_in_basket + 1 }];
      sessionStorage.setItem('basketItems', JSON.stringify(state.productsInBasket));
    },
    decCountProductInBasket: (state, action) => {
      if (state.productsInBasket) {
        state.productsInBasket = state.productsInBasket.map((item) => {
          if (item.id !== action.payload.id) return item;
          else return { ...item, count_in_basket: item.count_in_basket - 1 };
        });
      }
      sessionStorage.setItem('basketItems', JSON.stringify(state.productsInBasket));
    },
    delFromBasket: (state, action) => {
      if (state.productsInBasket) {
        state.productsInBasket = state.productsInBasket?.filter((item) => item.id !== action.payload.id);
      }
      sessionStorage.setItem('basketItems', JSON.stringify(state.productsInBasket));
    },
    getBasketData: (state, action) => {
      state.productsInBasket = action.payload;
    },

  },
});

const { actions, reducer } = ProductSlice;

export default reducer;

export const {
  addInBasket,
  delFromBasket,
  decCountProductInBasket,
  getBasketData,
} = actions;
