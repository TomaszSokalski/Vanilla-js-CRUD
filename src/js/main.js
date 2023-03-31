Date.formattedDate = function () {
    const date = new Date();
    const d = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear()

    return `${y}-${month}-${d}`;
};

Math.randomNumberFromRange = function(min, max) {
    return ~~(Math.random() * (max - min) + min);
};

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