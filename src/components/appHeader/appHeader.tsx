import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useAppSelector, useAppDispatch } from 'src/store/hooks/hooks';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBasketData } from 'src/store/slices/productSlice';
import styles from './appHeader.module.scss';

const AppHeader = () => {
  const { productsInBasket } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const basketData = JSON.parse(sessionStorage.getItem('basketItems') || 'null');
    if (basketData !== 'null') dispatch(getBasketData(basketData));
  }, []);
  return (
    <header className={styles.appHeader}>
      <Link to="/">
        <h3>QPICK</h3>
      </Link>
      <div className={styles.appHeader_buttons}>
        <Badge badgeContent={2}>
          <FavoriteBorderIcon />
        </Badge>
        <Link to="/basket">
          <Badge badgeContent={productsInBasket?.length || 0}>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Link>
      </div>
    </header>
  );
};
export default AppHeader;
