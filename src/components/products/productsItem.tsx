import { IProduct } from 'src/types/IProduct';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { addInBasket } from 'src/store/slices/productSlice';
import styles from './product.module.scss';

interface IProductsItemProps{
  product:IProduct;
}
const ProductsItem = ({ product }:IProductsItemProps) => {
  const dispatch = useAppDispatch();
  const addProductInBasket = () => {
    dispatch(addInBasket(product));
  };
  return (
    <Grid item md={6} sm={6} lg={4} xs={12}>
      <div className={styles.product_item}>
        <img width="219" height="237" src={product.image} alt="product" />
        <div className={styles.product_item_block}>
          <h4>{product.title}</h4>
          <div>
            {product.price}
            {' '}
            ₽
          </div>
        </div>
        <div className={styles.product_item_block}>
          <div className={styles.product_item_block_rate}>
            <StarIcon sx={{ color: '#FFCE7F', fontSize: 'medium' }} />
            {product.rate}
          </div>
          <button onClick={addProductInBasket} className={styles.product_item_button} type="button">
            Купить
          </button>
        </div>
      </div>
    </Grid>
  );
};
export default ProductsItem;
