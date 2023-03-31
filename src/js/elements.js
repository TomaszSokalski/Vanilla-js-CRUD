Math.randomNumberFromRange = function(min, max) {
    return ~~(Math.random() * (max - min) + min);
};

Date.formattedDate = function () {
    const date = new Date();
    const d = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear()

    return `${y}-${month}-${d}`;
};

const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

export const BUTTONS = getElements('button');
export const TASKS_TABLE = getElement('.tasks');
export const TABLE = getElement('.table');
export const FORM = getElement('form');
export const SHOW_BUTTON = getElement('.showDialog');
export const SORT_BUTTON = getElement('.sort');
export const CLOSE_BUTTON = getElement('.form-row:last-child > button');
export const DIALOG = getElement('dialog');
export const DATA_TABLE = [];


export const TASKS_STATUS = {
    nowe: 'nowe',
    w_trakcie: 'w_trakcie',
    wykonane: 'wykonane'
};

export const INIT_PAYLOAD = {
    id: Math.randomNumberFromRange(1, 1000),
    date: Date.formattedDate(),
    status: TASKS_STATUS.nowe,
};