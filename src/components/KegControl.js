import React from "react";
import Button from "react-bootstrap/Button";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false,
      searchKegList: [],
      searching: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false,
    });
  };

  handleSellAPint = (id) => {
    const selectedKeg = this.state.mainKegList.filter((keg) => keg.id === id)[0];
    selectedKeg.pints--;

    if (selectedKeg.pints === 0) {
      selectedKeg.status = "Out Of Stock";
    } else if (selectedKeg.pints < 10) {
      selectedKeg.status = "Almost Empty";
    }
    this.setState({
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
    });
  };

  handleFillAKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter((keg) => keg.id === id)[0];
    selectedKeg.pints = 124;
    selectedKeg.status = "";
    this.setState({
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter((keg) => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter((keg) => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList.filter((keg) => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null,
    });
  };

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let search = this.props.query;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />;
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />;
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else if (search !== "") {
      console.log(search);
      this.state.searchKegList = this.state.mainKegList.filter((keg) => keg.name.includes(search) || keg.brand.includes(search));
      currentlyVisibleState = <KegList kegList={this.state.searchKegList} onKegSelection={this.handleChangingSelectedKeg} sellAPint={this.handleSellAPint} fillAKeg={this.handleFillAKeg} />;
      buttonText = "Add Keg";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} sellAPint={this.handleSellAPint} fillAKeg={this.handleFillAKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="outline-dark" onClick={this.handleClick}>
          {buttonText}
        </Button>
      </React.Fragment>
    );
  }
}

export default KegControl;
