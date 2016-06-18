import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleChecked(){
    console.log('test');
    Tasks.update(this.props.task._id, {$set: {checked: !this.props.task.checked}});
  }

  deleteThisATask(){
    Tasks.remove(this.props.task._id);
  }

  render(){
    const taskClassName = this.props.task.checked ? "checked": "";

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisATask.bind(this)}>
          &times;
        </button>
        <input type="checkbox" readOnly checked={this.props.task.checked} onClick={this.toggleChecked.bind(this)} />
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}
