import React, { Component } from "react";
import CustomModal from "./components/CustomModal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      // viewCompleted: false,
      activeItem: {
        name: "",
        description: "",
        // completed: false
      },
      vaultItems: []
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    this.refreshList();
  };

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/items/")
      .then(res => this.setState({ vaultItems: res.data }))
      .catch(err => console.log(err));
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) { //If it is already existing want to UPDATE
      axios
        .put(`http://localhost:8000/api/items/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    } //If doesn't exist want to CREATE
    axios 
      .post("http://localhost:8000/api/items/", item)
      .then(res => this.refreshList());
  };

  handleDelete = item => {
    // alert("delete" + JSON.stringify(item));
    axios
      .delete(`http://localhost:8000/api/items/${item.id}`)
      .then(res => this.refreshList());
  };

  createItem = () => {
    const item = { name: "", description: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  // displayCompleted = status => {
  //   if (status) {
  //     return this.setState({ viewCompleted: true });
  //   }
  //   return this.setState({ viewCompleted: false });
  // };
  // renderTabList = () => {
  //   return (
  //     <div className="my-5 tab-list">
  //       {/* <span
  //             onClick={() => this.displayCompleted(true)}
  //             className={this.state.viewCompleted ? "active" : ""}
  //           >
  //             complete
  //           </span> */}
  //       <span
  //         onClick={() => this.displayCompleted(false)}
  //         className={this.state.viewCompleted ? "" : "active"}
  //       >
  //         Incomplete
  //           </span>
  //     </div>
  //   );
  // };
  renderItems = () => {
    // const { viewCompleted } = this.state;
    // const newItems = this.state.vaultItems.filter(
    //   item => item.completed === viewCompleted
    // );
    const newItems = this.state.vaultItems

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
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Vault app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                    </button>
              </div>
              {/* {this.renderTabList()} */}
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
          />
        ) : null}
      </main>
    );
  }
}
export default App;