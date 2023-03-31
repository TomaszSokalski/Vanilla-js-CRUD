const getElement = (selector) => document.querySelector(selector);

Math.randomNumberFromRange = function(min, max) {
    return ~~(Math.random() * (max - min) + min);
};

Date.formattedDate = function () {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

export const TASKS_TABLE = getElement('.tasks');
export const TABLE = getElement('.table');
export const FORM = getElement('form');
export const SHOW_BUTTON = getElement('.showDialog');
export const SORT_BUTTON = getElement('.sort');
export const CLOSE_BUTTON = getElement('.form-row:last-child > button');
export const DIALOG = getElement('dialog');
export const LOADER = getElement('.loader');
export const DATA_TABLE = [];


export const TASKS_STATUS = {
    new: 'new',
    in_process: 'in_process',
    done: 'done'
};

export const INIT_PAYLOAD = {
    id: Math.randomNumberFromRange(1, 1000),
    date: Date.formattedDate(),
    status: TASKS_STATUS.new
};