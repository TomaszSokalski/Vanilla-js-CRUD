import { DIALOG, CLOSE_BUTTON, SHOW_BUTTON, FORM, LOADER } from './elements';
import { INIT_PAYLOAD } from './elements';
import { localStorageService } from './service';

export const formActions = () => {
    document.querySelector('.time').setAttribute('min', Date.formattedDate());

    SHOW_BUTTON.addEventListener('click', () => {
        DIALOG.showModal();
        CLOSE_BUTTON.addEventListener('click', e => {
            e.preventDefault();
            DIALOG.close();
            FORM.reset();
        });
    });

    FORM.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(FORM);
        const formPayload = {};

        for (const [key, value] of formData) {
            formPayload[key] = value
        }
        const payLoad = {...INIT_PAYLOAD, ...formPayload};
        localStorageService.setItem(payLoad.id , payLoad);

        LOADER.style.display = 'block';
            setTimeout(() => {
                LOADER.style.display = 'none';
                history.go(0);
            } , 500);
            DIALOG.close()
    })
};

