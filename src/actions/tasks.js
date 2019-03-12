import {
  getRandomInt,
} from '../utils';
import {
  TASKS_SELECTOR,
  MIN_NUMBER_OF_TASKS,
  MAX_NUMBER_OF_TASKS,
} from '../constants';
import generateTaskData from '../data/task';

import Task from '../render/task';
import TaskEdit from '../render/taskEdit';

const tasksElement = document.querySelector(TASKS_SELECTOR);
const defaultNumberOfTasks = getRandomInt(MIN_NUMBER_OF_TASKS, MAX_NUMBER_OF_TASKS);

const makeTasks = (numberOfTasks) => {
  return new Array(+numberOfTasks).fill(``).map(() => {
    const data = generateTaskData();
    return [new Task(data), new TaskEdit(data), data];
  });

};

const renderTasks = (numberOfTasks = defaultNumberOfTasks) => {
  const tasks = makeTasks(numberOfTasks);

  tasksElement.innerHTML = ``;

  tasks.forEach(([taskComponent, editTaskComponent, data]) => {
    taskComponent.onEdit = () => {
      editTaskComponent.render();
      tasksElement.replaceChild(editTaskComponent.element, taskComponent.element);
      taskComponent.unrender();
    };

    editTaskComponent.onSubmit = (newObject) => {
      data.title = newObject.title;
      data.tags = newObject.tags;
      data.color = newObject.color;
      data.repeatingDays = newObject.repeatingDays;
      data.dueDate = newObject.dueDate;

      taskComponent.update(data);

      taskComponent.render();
      tasksElement.replaceChild(taskComponent.element, editTaskComponent.element);
      editTaskComponent.unrender();
    };

    editTaskComponent.onDelete = () => {
      editTaskComponent.unrender();
      taskComponent.unrender();
    };

    tasksElement.appendChild(taskComponent.render());
  });

};

export default renderTasks;
