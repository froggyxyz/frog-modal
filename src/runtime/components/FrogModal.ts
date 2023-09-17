import './modal.css';
import {h, useState} from "#imports";
import {DefineComponent} from "vue";
import {useFrogModal} from "../composables/useFrogModal";

export const FrogModal = {
    setup() {
        const modal = useState<{ component: DefineComponent | {}; options: any } | null>('frog-modal');
        const [, closeModal] = useFrogModal();

        return () =>
            h('div', { class: modal.value ? 'frog-modal' : 'frog-modal hide' }, [
                h('div', { class: 'frog-modal__overlay', onClick: closeModal }),
                h('div', { class: 'frog-modal__content' }, [h(modal.value?.component ?? '', modal.value?.options ? { ...modal.value.options } : {}, )]),
            ]);
    },
};
