/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:12:34
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 16:30:33
 */
import Button from './button';
import Input from './input';
import Modal from './modal';
import Drawer from './drawer';
import Checkbox from './checkbox';
import Radio from './radio';
import Switch from './switch';
import Select from './select';


const component = {
    RuyiButton: Button,
    RuyiModal: Modal,
    RuyiInput: Input,
    RuyiDrawer: Drawer,
    RuyiCheckbox: Checkbox,
    RuyiCheckboxGroup: Checkbox.Gruop,
    RuyiRadio: Radio,
    RuyiRadioGroup: Radio.Gruop,
    RuyiSwitch: Switch,
    RuyiSelect: Select,
    RuyiOption: Select.Option
}

const install = function(Vue, opts={}) {
    Object.keys(component).forEach(key => {
        Vue.component(key, component[key]);
    });
}

if (typeof window !== undefined && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...component
}