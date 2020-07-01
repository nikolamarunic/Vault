import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    // Input,
    // Label
} from 'react-bootstrap';

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };

    }
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;
        return (
            // <Modal show={true} toggle={toggle}> //Error when the toggle is present
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title> Vault Item </Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter item name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter item description"
                            />
                        </FormGroup>
                        {/* <FormGroup check>
                            <Label for="completed">
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                            Completed
                            </Label>
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                    Save
                </Button>
                </ModalFooter>
            </Modal>
        );
    }
}