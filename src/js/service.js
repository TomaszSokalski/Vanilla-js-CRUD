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
    }
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

export const createTable = (table, tasks) => {
    let tableContent = '';

    for (const el of table) {
        //language=html
        tableContent += `
            <tr>
               <td class="idValue">${el.id}</td>
               <td>${el.title}</td>
               <td>${el.description}</td>
                <td>
                    <select name="status" class="status">
                        <option value="${el.status}">${el.status}</option>
                        <option value="in_process">in_process</option>
                        <option value="done">done</option>
                    </select>
                </td>
                <td>${el.date}</td>
                <td>${el.date_to}</td>
                <td>
                    <select name="changeOwner" class="changeOwner">
                        <option value="">${el.owner}</option>
                        <option value="user_1">user_1</option>
                        <option value="user_2">user_2</option>
                        <option value="user_3">user_3</option>
                    </select>
                </td>
               <td>
                  <button class="delete-button btn-close">delete</button>
               </td>
            </tr>
         `;

        tasks.innerHTML = tableContent;
    }
};