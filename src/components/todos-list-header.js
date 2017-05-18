import React from 'react';

export default class TodosListHeader extends React.Component {
	render() {
		return (
                  <thead>
                       <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Action</th> 
                       </tr>
                  </thead>
		);
	}
}
