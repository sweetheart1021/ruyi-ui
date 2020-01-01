/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-27 13:32:57
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-01 21:22:18
 */
import Vue from 'vue';

import Message from './Message';

const MessageConstructor = Vue.extend(Message);

let div = document.createElement("div");
div.setAttribute("class", 'ruyi-message-wapper');
div.setAttribute("style", 'position: fixed;width: 100%;top: 20px;text-align: center;')
document.body.appendChild(div);


const message = (options) => {
    if (typeof options === 'string' || typeof options === 'number') {
        options = {
            message: options
        }
    }
    const MessageInstance = new MessageConstructor();
    MessageInstance.vm = MessageInstance.$mount();
    MessageInstance.vm.visible = true;
    MessageInstance.vm.type = options.v;
    MessageInstance.vm.message = options.message;
    MessageInstance.vm.dom = MessageInstance.$el;
    document.getElementsByClassName('ruyi-message-wapper')[0].appendChild(MessageInstance.dom);
    return MessageInstance
}

['success', 'warning', 'error', 'primary'].forEach(v => {
    message[v] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.v = v;
        return message(options);
    };
})

export default message;