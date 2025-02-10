import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  //   state = {
  //     selected: ""
  //   };

  checkSelected = (tablePos) => (this.props.selected === tablePos ? `table-item-selected` : "");

  render() {
    console.log("RENDER Table");
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Uno" })}
            onClick={() => this.props.changeSelected("Uno")}
            className={this.checkSelected("Uno")}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Due" })}
            onClick={() => this.props.changeSelected("Due")}
            className={this.checkSelected("Due")}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Tre" })}
            onClick={() => this.props.changeSelected("Tre")}
            className={this.checkSelected("Tre")}
          >
            Tre
          </ListGroup.Item>
          <ListGroup.Item
            //   onClick={() => this.setState({ selected: "Quattro" })}
            onClick={() => this.props.changeSelected("Quattro")}
            className={this.checkSelected("Quattro")}
          >
            Quattro
          </ListGroup.Item>
        </ListGroup>
        <p>
          L&apos;elemento attualmente selezionato è <strong>{this.props.selected || "Nessuno"}</strong>
        </p>
      </>
    );
  }
}

export default Table;
