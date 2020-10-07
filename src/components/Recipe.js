import React, { useContext, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { ModalContext } from "../context/ModalContext";

import { makeStyles } from "@material-ui/core/styles";
import Spinner2 from "./Spinner2";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    overflow: "scroll",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: 400,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ oneRecipe }) => {
  //Configuracion del modal de material ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [carga, setCarga] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
    setCarga(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCarga(false);
  };

  const { recipe, setRecipe, setIdRecipe } = useContext(ModalContext);

  //Muestra y formatea los ingredientes
  const showIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card mb-3">
        <h2 className="card-header ">{oneRecipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={oneRecipe.strDrinkThumb}
          alt={`Images of ${oneRecipe.strDrink}`}
        />
        <button
          type="button"
          className="btn btn-block btn-primary"
          onClick={(e) => {
            setIdRecipe(oneRecipe.idDrink);
            handleOpen();
            setCarga(true);

            setTimeout(() => {
              setCarga(false);
              //Total
            }, 2000);
          }}
        >
          Show Recipe {carga ? <Spinner2 /> : null}
        </button>

        {!carga ? (
          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipe.strDrink}</h2>
              <h3>Instructions</h3>
              <p className="mt-4">{recipe.strInstructions} </p>
              <img
                className="img-fluid my-4"
                src={recipe.strDrinkThumb}
                alt={recipe.strDrink}
              />
              <h3>Ingredients & Quantity</h3>
              <ul>{showIngredients(recipe)}</ul>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Recipe;
