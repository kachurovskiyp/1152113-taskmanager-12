import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/board.js";
import {createCardTemplate} from "./view/task.js";
import {createEditTaskTemplate} from "./view/task-edit.js";
import {createLoadMoreTemplate} from "./view/load-more-button.js";

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteMainControlElement = siteMainElement.querySelector(`.main__control`);

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderElement(siteMainControlElement, createSiteMenuTemplate(), `beforeend`);
renderElement(siteMainElement, createFilterTemplate(), `beforeend`);
renderElement(siteMainElement, createSortTemplate(), `beforeend`);

const siteBoardElement = siteMainElement.querySelector(`.board`);
const siteBoarTasksdElement = siteBoardElement.querySelector(`.board__tasks`);

renderElement(siteBoarTasksdElement, createEditTaskTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  renderElement(siteBoarTasksdElement, createCardTemplate(), `beforeend`);
}

renderElement(siteBoardElement, createLoadMoreTemplate(), `beforeend`);
