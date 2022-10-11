import { useAppSelector } from 'src/store/hooks/hooks';
import Grid from '@mui/material/Grid';
import BasketItem from './basketItem';
import styles from './basket.module.scss';
import BasketTotalPrice from './basketTotalPrice';

const Basket = () => {
  const { productsInBasket } = useAppSelector((store) => store.product);
  return (
    <div className={styles.basket}>
      <h2 className={styles.header}>Корзина</h2>
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} lg={6} xs={12}>
          <div>
            {productsInBasket?.map((item) => <BasketItem key={item.id} product={item} />)}
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6}>
          <BasketTotalPrice />
        </Grid>
      </Grid>

    </div>
  );
};
export default Basket;
