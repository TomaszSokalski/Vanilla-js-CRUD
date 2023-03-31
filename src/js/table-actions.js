import { TASKS_TABLE, TABLE, SORT_BUTTON, DATA_TABLE } from './elements';
import { localStorageService, getTasks } from './service'

export const tableActions = () => {

    const createTable = (table, tasks) => {
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
                        <option value="w_trakcie">w_trakcie</option>
                        <option value="wykonane">wykonane</option>
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

    TABLE.addEventListener('click', e => {
        if (e.target.classList.contains('delete-button')) {
            if (!window.confirm('Are you sure to remove task?')) {
                return;
            }
            localStorageService.removeItem(e.target.closest('tr').querySelector('.idValue').innerHTML);
            e.target.closest('tr')?.remove();
            history.go(0);
        }
        if (e.target.classList.contains('deleteAll-button')) {
            if (!window.confirm('Are you sure to remove all tasks?')) {
                return;
            }
            localStorageService.clear()
            e.target.closest('table').querySelector('.task')?.remove();
            DATA_TABLE.innerHTML = 'No tasks to display';
            history.go(0);
        }
    });
    TABLE.addEventListener('change', e => {
        const id = e.target.closest('tr').querySelector('.idValue').innerHTML;
        const changedPayload = DATA_TABLE.filter(el => el.id === +id);
        const listenerStorageActions = () => {
            localStorageService.removeItem(id);
            localStorageService.setItem(id, changedPayload[0]);
        };

        if (e.target.classList.contains('status')) {
            for (const el of changedPayload) {
                if (!window.confirm(`Change status to ${e.target.value}`)) {
                    return;
                }
                el.status = e.target.value
            }

            listenerStorageActions();
        }
        if (e.target.classList.contains('changeOwner')) {
            for (const el of changedPayload) {
                if (window.confirm(`Change status to ${e.target.value}`)) {
                    el.owner = e.target.value
                }
            }

            listenerStorageActions();
        }
    });

    getTasks(DATA_TABLE);
    createTable(DATA_TABLE, TASKS_TABLE);
};