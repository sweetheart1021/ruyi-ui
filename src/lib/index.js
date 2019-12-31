/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:12:34
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-31 15:59:20
 */
import Button from './button';
import Input from './input';
import Modal from './modal';
import Drawer from './drawer';
import Checkbox from './checkbox';
import Radio from './radio';
import Switch from './switch';
import Select from './select';
import Tooltip from './tooltip';
import Poptip from './poptip';
import Message from './message';
import Table from './table';
import BackTop from './backTop';
import Spin from './spin';
import TimeLine from './TimeLine';
import Steps from './steps';
import Progress from './progress';


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
    RuyiOption: Select.Option,
    RuyiTooltip: Tooltip,
    RuyiPoptip: Poptip,
    RuyiTable: Table,
    RuyiBackTop: BackTop,
    RuyiSpin: Spin,
    RuyiTimeLine: TimeLine,
    RuyiSteps: Steps,
    RuyiStep: Steps.Step,
    RuyiProgress: Progress
}

const install = function(Vue, opts={}) {
    Object.keys(component).forEach(key => {
        Vue.component(key, component[key]);
    });
    Vue.prototype.$ruyimessage = Message;
}

if (typeof window !== undefined && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...component
}