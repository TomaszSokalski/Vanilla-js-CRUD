import { formActions } from './form-actions'

Array.prototype.sortByKey = function (key) {
    this.sort((a, b) => {
        if (a[key] > b[key]) {
            return 1;
        }

        if (a[key] < b[key]) {
            return -1;
        }
        return 0;
    })
};

    formActions();