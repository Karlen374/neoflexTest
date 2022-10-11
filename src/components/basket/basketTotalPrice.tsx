import { useAppSelector } from 'src/store/hooks/hooks';
import styles from './basket.module.scss';

const BasketTotalPrice = () => {
  const { productsInBasket } = useAppSelector((store) => store.product);
  const totalPrice = productsInBasket?.reduce((acc, current) => {
    return acc + current.count_in_basket * current.price;
  }, 0);
  return (
    <div className={styles.totalPrice}>
      <div className={styles.totalPrice_block}>
        <h3 className={styles.totalPrice_header}>
          ИТОГО
        </h3>
        <h3 className={styles.totalPrice_header}>
          ₽
          {' '}
          {totalPrice}
        </h3>
      </div>
      <button className={styles.totalPrice_button} type="button">Перейти к оформлению</button>
    </div>
  );
};
export default BasketTotalPrice;
