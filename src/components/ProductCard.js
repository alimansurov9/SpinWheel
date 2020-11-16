import React, { useMemo, useState } from "react";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
  Fade,
  Modal,
  Backdrop,
} from "@material-ui/core";

import {
  MoreVert as MoreVertIcon,
  
} from "@material-ui/icons";

import emptyImage from "../assets/empty-image.png";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  deleteProduct,
  editProduct,
  removeItemFromCart,
} from "../redux/products/actions";
import { useHistory } from "react-router-dom";
import EditElement from "../redux/routes/EditElement";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "contain",
    position: "relative",
  },
  mediaImage: {
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  oldPrice: {
    textDecoration: "line-through",
  },
  card: {
    margin: "10px",
  },
  saleIndicator: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ProductCard({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // const handleAddToCart = () => {
  //     dispatch(addItemToCart(data));
  //   }

  // const handleRemoveFromCart = () => {
  // dispatch(removeItemFromCart(data));
  // }

  // const cart = useSelector(state => state.products.cart);

  // const isInCart = useMemo(() => {
  // return cart.some(cartItem => cartItem.id === data.id);
  // }, [cart, data.id]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
    console.log("close");
  };

  const handleDelete = (event, id) => {
    event.stopPropagation();
    setAnchorEl(null);
    dispatch(
      deleteProduct(id, () => {
        // history.replace('/')
      })
    );
  };

  const handleEdit = (event, product) => {
    event.stopPropagation();
    setAnchorEl(null);
    console.log(product);
    console.log(product.title);
    history.replace("/edit-element");

    return (
      <div>
        <EditElement title="a" />
      </div>
    );
  };

  return (
    <Card style={{ backgroundColor: "#c5cae9" }} className={classes.card}>
      <CardHeader
        // avatar={
        //   <Avatar
        //     style={{
        //       background:
        //         "#" + Math.floor(Math.random() * 16777215).toString(16),
        //     }}
        //   >
        //     {/* {data.authorName[0] ?? "?"} */}
        //     {/* {console.log(data.authorName[0])} */}
        //   </Avatar>
        // }
        action={
          <IconButton
            aria-label="settings"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* {console.log(data)} */}
              <MenuItem onClick={(e, id = data.id) => handleDelete(e, id)}>
                Delete
              </MenuItem>
              <MenuItem onClick={(e, product = data) => handleEdit(e, product)}>
                Edit
              </MenuItem>
            </Menu>
          </IconButton>
        }
        title={data.title}
        subheader={data.author}
      />
      <CardMedia className={classes.media}>
        <img
          className={classes.mediaImage}
          src={data.image || emptyImage}
          onError={(e) => {
            e.target.src = emptyImage;
          }}
          // alt = 'image'
        />
        {data.discountInPercent != null && (
          <Button
            className={classes.saleIndicator}
            color="secondary"
            size="medium"
            variant="contained"
          >
            -{data.discountInPercent}%
          </Button>
        )}
      </CardMedia>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ height: "200px" }}
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <div>
          {/* <IconButton aria-label = "add to card">
                        <ShoppingCart/>
                    </IconButton> */}

          {/* {isInCart ? (
                        <IconButton style={{color: "red"}} aria-label="add to card">
                            <RemoveShoppingCart/>
                            </IconButton>
                        ) : (
                        <IconButton aria-label="add to card" >
                            <ShoppingCart/>
                        </IconButton>
                        )}

                    <IconButton aria-label = "share">
                        <Share/>
                    </IconButton> */}
        </div>
        <div>
          {data.salePrice != null && (
            <Button className={classes.oldPrice} color="secondary">
              {data.price}
            </Button>
          )}

          <Button
            className={classes.price}
            variant="contained"
            onClick={() => history.push("/checkout")}
          >
            {data.salePrice ?? data.price}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
