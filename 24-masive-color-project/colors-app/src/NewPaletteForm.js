import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";

import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

import styles from "./styles/NewPaletteFormStyles";
import seedColors from "./seedColors";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors
    };
  }

  // state = {
  //     open: false,
  //   };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor = newColor => {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    // redirect to index page
    this.props.history.push("/");
  };

  removeColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
  };

  clearColors = () => {
    this.setState({
      colors: []
    });
  };

  addRandomColor = () => {
    // pick random color from existing palettes
    const allColors = this.props.palettes.map(p => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = this.state.colors.some(
        color => color.name === randomColor.name
      );
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={paletteIsFull}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);