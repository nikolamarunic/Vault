import React, { Component } from "react";
import CustomModal from "./components/CustomModal/CustomModal";
import LandingPage from "./components/LandingPage/LandingPage";
import api from './util/api';

import {
  Form,
  Button,
  FormControl,
  Nav, Navbar
} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      searchQuery: "",
      modal: false,
      // viewCompleted: false,
      activeItem: {
        name: "",
        description: "",
        // completed: false
      },
      vaultItems: [], //vaultItems represents the items on display
      totalItems: []  //totalItems represents all the items read from the database (necessary for searching/filtering)
    };
    this.toggle = this.toggle.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  setToken(token) {
    this.setState({ token: token });
    this.refreshList();
  }

  componentDidMount() {
    console.log('mounted');
    this.refreshList();
  };

  refreshList = async () => {
    let newList = await api.refreshList(this.state.token);
    this.setState({ vaultItems: newList, allItems: newList });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = async (item) => {
    this.toggle();
    await api.handleSubmit(item, this.state.token);
    this.refreshList();
  };

  handleDelete = async (item) => {
    await api.handleDelete(item, this.state.token);
    this.refreshList();
  };

  handleSearch = async () => {
    //If the query is empty it is just a simple get request
    if (this.state.searchQuery !== ""){
      const query = this.state.searchQuery;
      let items = this.state.allItems
      items = items.filter(currItem => currItem.name.toLowerCase().includes(query.toLowerCase()) || currItem.description.toLowerCase().includes(query.toLowerCase()));
      this.setState({vaultItems : items});
    } else {
      this.refreshList();
    }    
  };

  createItem = () => {
    const item = { name: "", description: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  handleHide = () => {
    this.setState({ modal: false });
  }

  renderItems = () => {
    const newItems = this.state.vaultItems;

    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2`}
          val={item.description}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit
              </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete
              </button>
        </span>
      </li>
    ));
  };

  render() {
    if (this.state.token) {
      return (
        <main className="content">
          <h1 className="text-black text-uppercase text-center my-4">Your Vault</h1>
          <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div>
                  <Navbar bg="light" expand="lg">
                    <Button onClick={this.createItem} className="btn btn-primary">
                      Add an item
                    </Button>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="#"></Nav.Link>
                        <Nav.Link href="#"></Nav.Link>
                      </Nav>
                      <Form inline>
                        <FormControl type="text" placeholder="Search for an item" className="mr-sm-2" 
                        controlId="searchQuery"
                        value={this.state.searchQuery}
                        onChange={async(e) => {
                          //The await is required! otherwise clearing the search bar wont refresh the items.
                          await this.setState({searchQuery: e.target.value});
                          this.handleSearch();
                        }}/>
                      </Form>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
                <ul className="list-group list-group-flush">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
          {this.state.modal ? (
            <CustomModal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.handleSubmit}
              onHide={this.handleHide}
            />
          ) : null}
        </main>
      );
    } else {
      return (
        <LandingPage setToken={this.setToken} />
      );
    }
  }
}
export default App;