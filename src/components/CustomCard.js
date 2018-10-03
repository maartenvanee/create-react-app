import React, { Component } from 'react';
import './CustomCard.css';

class CustomCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }


    edit = () => {
        console.log('edit');
        this.setState({ editing: true });
    }

    save = () => {
        console.log('edit');
        this.setState({ editing: false });
    }

    renderNormal() {
        return (
            <div className="card">
                <h3 className="title">{this.props.title}</h3>
                <div className="card-button" onClick={this.edit}>Edit</div>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="card">
                <input className="title-input" value={this.props.title} />
                <div className="card-button" onClick={this.save}>Save</div>
            </div>
        );
    }

    render() {
        if(this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
};

export default CustomCard;