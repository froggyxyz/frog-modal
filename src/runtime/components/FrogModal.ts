import './modal.css';
import {h, useState} from "#imports";
import {DefineComponent} from "vue";
import useFrogModal from "../composables/useFrogModal";

export default {
    setup() {
        const modal = useState<DefineComponent>('frog-modal');
        const [, closeModal] = useFrogModal();

        return () =>
            h('div', { class: modal.value ? 'frog-modal' : 'frog-modal hide' }, [
                h('div', { class: 'frog-modal__overlay', onClick: closeModal }),
                h('div', { class: 'frog-modal__content' }, [h(modal.value ?? '')]),
            ]);
    },
};
