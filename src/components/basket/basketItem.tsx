import { IProduct } from 'src/types/IProduct';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { addInBasket, decCountProductInBasket, delFromBasket } from 'src/store/slices/productSlice';
import styles from './basket.module.scss';

interface IBasketItemProps{
  product:IProduct;
}
const BasketItem = ({ product }:IBasketItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.item}>
      <div className={styles.item_block}>
        <div className={styles.item_block_img}>
          <img src={product.image} alt="product" />
          <div className={styles.item_price}>
            <h3>{product.title}</h3>
            <p>
              {product.price}
              {' '}
              ₽
            </p>
          </div>
        </div>
        <IconButton onClick={() => dispatch(delFromBasket(product))} aria-label="delete" size="small">
          <DeleteForeverRoundedIcon sx={{ color: '#DF6464' }} />
        </IconButton>
      </div>
      <div className={styles.item_priceBlock}>
        <div className={styles.item_countBlock}>
          <button onClick={() => dispatch(decCountProductInBasket(product))} type="button">−</button>
          <div className={styles.item_countBlock_counter}>{product.count_in_basket}</div>
          <button onClick={() => dispatch(addInBasket(product))} type="button">+</button>
        </div>
        <div className={styles.item_countBlock_price}>
          {product.price * product.count_in_basket}
          {' '}
          ₽
        </div>
      </div>
    </div>
  );
};
export default BasketItem;
