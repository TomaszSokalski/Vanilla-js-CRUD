import { TASKS_TABLE, TABLE, SORT_BUTTON, DATA_TABLE, LOADER } from './elements';
import { localStorageService, getTasks, createTable } from './service';

export const tableActions = () => {

    TABLE.addEventListener('click', e => {
        if (e.target.classList.contains('delete-button')) {
            if (!window.confirm('Are you sure to remove task?')) {
                return;
            }
            localStorageService.removeItem(e.target.closest('tr').querySelector('.idValue').innerHTML);

            LOADER.style.display = 'block';
            setTimeout(() => {
                LOADER.style.display = 'none';
                e.target.closest('tr')?.remove();
                history.go(0);
            } , 500);
        }
        if (e.target.classList.contains('deleteAll-button')) {
            if (!window.confirm('Are you sure to remove all tasks?')) {
                return;
            }
            localStorageService.clear();

            LOADER.style.display = 'block';
            setTimeout(() => {
                LOADER.style.display = 'none';
                e.target.closest('table').querySelector('.task')?.remove();
                TASKS_TABLE.innerHTML = 'No tasks to display';
                history.go(0);
            } , 500);
        }
    });

    TABLE.addEventListener('change', e => {
        const id = e.target.closest('tr').querySelector('.idValue').innerHTML;
        const changedPayload = DATA_TABLE.filter(el => el.id === +id);
        const handleStorageActions = () => {
            localStorageService.removeItem(id);
            localStorageService.setItem(id, changedPayload[0]);
        };

        if (e.target.classList.contains('status')) {
            for (const el of changedPayload) {
                if (!window.confirm(`Change status to ${e.target.value}`)) {
                    return;
                }
                el.status = e.target.value;
            }

            handleStorageActions();
        }
        if (e.target.classList.contains('changeOwner')) {
            for (const el of changedPayload) {
                if (window.confirm(`Change status to ${e.target.value}`)) {
                    el.owner = e.target.value
                }
            }

            handleStorageActions();
        }
    });

    SORT_BUTTON.addEventListener('click', () => {
        TASKS_TABLE.innerHTML = '';
        DATA_TABLE.sortByKey('id');
        createTable(DATA_TABLE, TASKS_TABLE);
    })

    getTasks(DATA_TABLE);
    createTable(DATA_TABLE, TASKS_TABLE);
};