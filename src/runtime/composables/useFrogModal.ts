import {DefineComponent} from "vue";
import {useState} from "#imports";

export const useFrogModal = <T>(): [(comp: DefineComponent | {}, opts?: T) => void, () => void] => {
    const modal = useState<{ component: DefineComponent | {}; options: T | {} } | null>('frog-modal')

    const setter = (_cmp: DefineComponent | {}, _opts: T | {} = {}) => modal.value = {component: _cmp, options: _opts};
    const clearer = () => modal.value = null;

    return [setter, clearer];
}
