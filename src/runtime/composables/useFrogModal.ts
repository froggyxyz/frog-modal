import {DefineComponent} from "vue";
import {useState} from "#imports";

export const useFrogModal = (): [(v: DefineComponent) => void, () => void] => {
    const modal = useState<DefineComponent | null>('frog-modal')

    const setter = (_cmp: DefineComponent) => modal.value = _cmp;
    const clearer = () => modal.value = null;

    return [setter, clearer];
}
