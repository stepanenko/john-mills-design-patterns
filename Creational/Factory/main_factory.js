
const Task = require('./task');
const repoFactory = require('./repoFactory');

let task = new Task(repoFactory.getRepo('task').get(1));

const user = repoFactory.getRepo('user').get(1);
const project = repoFactory.getRepo('project').get(1);

task.user = user;
task.project = project;


console.log(task);
task.save();
