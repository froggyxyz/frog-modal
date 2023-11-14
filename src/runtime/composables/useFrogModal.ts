import {DefineComponent, Ref} from "vue";
import {markRaw, ref, useState, watch} from "#imports";

export const useFrogModal = <T>(): [(comp: DefineComponent | {}, opts?: T) => void, () => void, Ref<boolean>] => {
    const modal = useState<{ component: DefineComponent | {}; options: T | {} } | null>('frog-modal')
    const isOpen = ref<boolean>(false);

    const setter = (_cmp: DefineComponent | {}, _opts: T | {} = {}) => modal.value = {component: markRaw(_cmp), options: _opts};
    const clearer = () => modal.value = null;

    watch(() => modal.value, () => {
        isOpen.value = !!modal.value;
    })

    return [setter, clearer, isOpen];
}
