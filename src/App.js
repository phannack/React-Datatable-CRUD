import React, { Component } from 'react'
import './App.css';
import MaterialTable from 'material-table';

class App extends Component {


  constructor(props) {
    super(props);
    this.age = Array.from(new Array(30),(val, index) => index + 10);
    
    this.state = {
      columns: [
        { title: 'Name', field: 'name' },
        {
          title: 'Age',
          field: 'age',
          lookup: this.age,
        },
        { title: 'Nickname', field: 'nickname' },
      ],
      data: []
    }
  }

  render() {
    return (
      <MaterialTable
        title="Single Page Web Application"
        columns={this.state.columns}
        data={this.state.data}
        options={{
          search: false,
          actionsColumnIndex: -1,
          paging: false
        }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
             setTimeout(() => {
                {
                  const data = Array.from(this.state.data);
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
           
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = Array.from(this.state.data);
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = Array.from(this.state.data);
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
}
export default App;
