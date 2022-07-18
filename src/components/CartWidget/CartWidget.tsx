import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import blueGrey from '@mui/material/colors/blueGrey';
import { Link } from "react-router-dom";


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export interface IqttyProduct {
  quantityProduct: number
}

const CartWidget: React.FC<IqttyProduct> = ({quantityProduct}) => {
  return (
    <Link to={"/CartView"} replace style={{ textDecoration: "none" }}>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={quantityProduct} color="secondary">
        <ShoppingCartIcon sx={{fontSize: 32, color: blueGrey[50]}}/>
      </StyledBadge>
    </IconButton>
    </Link>
  );
}
export default CartWidget;