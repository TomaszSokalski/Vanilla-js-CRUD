export const LOCAL_STORAGE_SERVICE = {
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