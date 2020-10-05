import React, { useContext, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { ModalContext } from "../context/ModalContext";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ oneRecipe }) => {
  //Configuracion del modal de material ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { recipe, setRecipe, setIdRecipe } = useContext(ModalContext);

  console.log(recipe);
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{oneRecipe.strDrink}</h2>
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
          }}
        >
          Show Recipe{" "}
        </button>
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
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Recipe;
