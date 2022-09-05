import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  outer: {
    display:'flex',
    justifyContent:'space-between',
    marginTop:'15px',
    color:'grey'
  },
  orders: {
    marginRight: '15px',
    width:'7%',
    display:'flex',
    justifyContent:'space-between'
  }
});

const Header = ({ apiData }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <div>{apiData?.restaurant_name}</div>
      <div className={classes.orders}>
        <span>My Orders</span>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Header;
