import React from 'react';

export default class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                Name:<input type="text" placeholder="Enter Name" ref="createName" /><br/><br/>
                E-mail:<input type="text" placeholder="Enter E-mail" ref="createEmail" /><br/><br/>
                Phone:<input type="text" placeholder="Enter phone no." ref="createPhone" /><br/><br/>
                <button>Create Contact</button><br/><br/>
                {this.renderError()}<br/><br/>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createName = this.refs.createName;
        const name = createName.value;
        const createPhone = this.refs.createPhone;
        const phone = createPhone.value;
        const createEmail = this.refs.createEmail;
        const email = createEmail.value;
        const validateInput = this.validateInput(name,phone,email);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }
        var contact=new Object();
        contact.email=email;
        contact.name=name;
        contact.phone=phone;
        this.setState({ error: null });
        this.props.createTask(contact);
        this.refs.createName.value = '';
        this.refs.createPhone.value = '';
        this.refs.createEmail.value = '';
    }

    validateInput(name,phone,email) {
    	var str="";
        if (!name) {
            str+='  Please enter a name.  ';
        } else if (_.find(this.props.todos, todo => todo.name === name)) {
            str+='  Name already exists.  ';
        }
        if(!email) {
        	str+='  Please enter an e-mail.  ';
        }else if (_.find(this.props.todos, todo => todo.email === email)) {
            str+='  Email already exists.  ';
        } else {
        	var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
             str+='  Not a valid e-mail address  ';
            }
        }
         if(!phone) {
        	str+='  Please enter a phone no.  ';
        }else if (_.find(this.props.todos, todo => todo.phone === phone)) {
            str+='  Phone No. already exists.  ';
        } else {
        	var phoneno = /^\d{10}$/;
            if(!(phone.match(phoneno))){
             str+='  Not a valid phone no.  ';
            }
        }
        if(str)
        	return str; 
        return null;
    }
}
