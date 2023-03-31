import { formActions } from './form-actions'
import { tableActions } from './table-actions'

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
    tableActions();