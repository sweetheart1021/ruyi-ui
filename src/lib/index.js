/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:12:34
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 14:42:46
 */
import Button from './button';
import Modal from './modal';


const component = {
    RuyiButton: Button,
    RuyiModal: Modal
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