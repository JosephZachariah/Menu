import React, { useState} from "react";
import { makeStyles } from "@mui/styles";
import MenuList from "./MenuList";

const useStyles = makeStyles({
  menu: {
    marginTop: "30px",
  },
  menuHeadings: {
    display: "flex",
  },
  menuHeading: {
    paddingBottom: "15px",
    borderBottom: "1px solid grey",
    textAlign:"center",
    "&:hover": {
      paddingBottom: "14px",
      borderBottom: "2px solid red",
      color: "red  ",
    },
  },
});

const Menu = ({ apiData }) => {
  const classes = useStyles();
  const [dishData, setDishData] = useState(null);

  return (
    <div className={classes.menu}>
      <div className={classes.menuHeadings}>
        {apiData?.table_menu_list.map((item) => {
          return (
            <div
              className={classes.menuHeading}
              style={{ width: `${100 / apiData?.table_menu_list.map.length}%` }}
            onClick = {()=>setDishData(item)}
            >
              {item.menu_category}
            </div>
          );
        })}
      </div>
      <div><MenuList dishes={dishData?.category_dishes}/></div>
    </div>
  );
};

export default Menu;
