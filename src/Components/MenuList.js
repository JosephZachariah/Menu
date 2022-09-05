import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  outer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 55px",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
  },
  buttonDiv: {
    backgroundColor: "green",
    width: "fit-content",
    borderRadius: "10px",
    color: "white",
    padding: "3px 10px",
  },
  countButton: {
    backgroundColor: "green",
    // borderColor:"green",
    borderRadius: "10px",
    color: "white",
    padding: "0px 8px",
  },
  caloriesNpic: {
    display: "flex",
  },
});

const MenuList = ({ dishes }) => {


  const classes = useStyles();
  console.log("entered MenuList", dishes);

  const tempData= dishes;

  tempData?.map(item=>{
    item.count=0;
  })



  const minusCount =(value)=>{
    console.log(value,"valueMinus")
    tempData.map(item=>{
      if (item.id === value.id){
        item.count=item.count-1;
      }
    })
    // if(count !==0){
    //   setCount(count-1)
    // }
  }
  const plusCount =(value)=>{
    console.log(value,"valuePlus")
    tempData.map(item=>{
      if (item.id === value.id){
        item.count=item.count+1;
      }
    })
    // setCount(count+1)
  }

  return (
    <div>
      {tempData?.map((item) => {
        return (
          <div className={classes.outer}>
            <div className={classes.inner}>
              <h2>{item.dish_name}</h2>
              <span>
                <b>{item.dish_currency + "" + item.dish_price}</b>
              </span>
              <span>{item.dish_discription}</span>
              {item.dish_Availability ? (
                <div className={classes.buttonDiv}>
                  <button className={classes.countButton} onClick={()=>minusCount(item)}>-</button>
                  <span id={item.dish_id}>{item.count}</span>
                  <button className={classes.countButton} onClick={()=>plusCount(item)}>+</button>
                </div>
              ) : (
                <div>Not Available</div>
              )}
              {item.addonCat.length === 0 ? null : (
                <span style={{color:'red'}}>customization available</span>
              )}
            </div>
            <div className={classes.inner}>
              <div className={classes.caloriesNpic}>
                <div><span style={{marginRight:'100px'}}>{item.dish_calories} Calories</span></div>
                <img
                  src={item.dish_image}
                  alt="Food Picture"
                  width="100"
                  height="100"
                  style={{borderRadius:'10px'}}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
