import React from 'react';

export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			isEditing: false
		};
	}
        
    renderActionsSection() {
    	const {name,email,phone } = this.props;
        return (
            <td>
		      <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </td>
        );
	}

	render() {
		return (
		      <tr>
		         <td>{this.props.name}</td>
                 <td>{this.props.email}</td>
                 <td>{this.props.phone}</td>
		         {this.renderActionsSection()}
		      </tr>
        );
	}
	
	onDeleteClick(event) {
		event.preventDefault();
		const contact=new Object();
		contact.name=this.props.name;
		contact.email=this.props.email;
		contact.phone=this.props.phone;
		this.props.deleteTask(contact);
	}
}
