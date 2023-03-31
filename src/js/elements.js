const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

export const buttons = getElements('button');
export const tasksTable = getElement('.tasks');
export const table = getElement('.table');
export const form = getElement('form');
export const showButton = getElement('.showDialog');
export const sortButton = getElement('.sort');
export const closeButton = getElement('.form-row:last-child > button');