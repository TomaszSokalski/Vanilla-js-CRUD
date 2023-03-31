export const localStorageService = {
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    key(index) {
        return localStorage.key(index);
    },
    removeItem(key) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    },
};

export const getTasks = table => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorageService.key(i);
        if (key >= 0 && key <= 1000) {
            table.push(localStorageService.getItem(key))
        }
    }
    return table;
};