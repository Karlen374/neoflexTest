import Grid from '@mui/material/Grid';
import { useAppSelector } from 'src/store/hooks/hooks';
import ProductsItem from './productsItem';
import styles from './product.module.scss';

const Products = () => {
  const { productList } = useAppSelector((store) => store.product);
  return (
    <div className={styles.productList}>
      <h4 className={styles.subHeader}>Наушники</h4>
      <Grid className={styles.product} container spacing={2}>
        {productList.slice(0, 6).map((item) => <ProductsItem product={item} key={item.id} />)}
      </Grid>
      <h4 className={styles.subHeader}>Беспроводные Наушники</h4>
      <Grid className={styles.product} container spacing={2}>
        {productList.slice(6).map((item) => <ProductsItem product={item} key={item.id} />)}
      </Grid>
    </div>

  );
};
export default Products;
