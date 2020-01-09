/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:12:34
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-09 16:53:31
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
import Steps from './steps';
import Progress from './progress';
import Tag from './tag';
import Badge from './badge';
import Dropdown from './dropdown';
import Cascader from './cascader';
import Breadcrumb from './breadcrumb';
import Alert from './alert';
import Notice from './notice';
import Tree from './tree';
import From from './form';


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
    RuyiSteps: Steps,
    RuyiStep: Steps.Step,
    RuyiProgress: Progress,
    RuyiTag: Tag,
    RuyiBadge: Badge,
    RuyiDropdown: Dropdown,
    RuyiDropdownMenu: Dropdown.DropdownMenu,
    RuyiDropdownItem: Dropdown.DropdownItem,
    RuyiCascader: Cascader,
    RuyiBreadcrumb: Breadcrumb,
    RuyiBreadcrumbItem: Breadcrumb.BreadcrumbItem,
    RuyiAlert: Alert,
    RuyiTree: Tree,
    RuyiFrom: From,
    RuyiFromItem: From.FormItem
}

const install = function(Vue, opts={}) {
    Object.keys(component).forEach(key => {
        Vue.component(key, component[key]);
    });
    Vue.prototype.$ruyimessage = Message;
    Vue.prototype.$ruyinotice = Notice;
}

if (typeof window !== undefined && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...component
}