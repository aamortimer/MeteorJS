import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './tasks.html';

Template.task.events({
  'click .delete'(event) {
    event.preventDefault();

    Tasks.remove(this._id);
  },
  'click .toggle-checked'() {
    Tasks.update(this._id, {
      $set: {checked: !this.checked}
    })
  }
});