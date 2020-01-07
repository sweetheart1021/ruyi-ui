/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-07 15:59:23
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-07 18:15:11
 */
/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-27 13:32:57
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-06 17:48:29
 */
import Vue from 'vue';

import Notice from './Notice';

const NoticeConstructor = Vue.extend(Notice);

let div = document.createElement("div");
div.setAttribute("class", 'ruyi-notice-wapper');
div.setAttribute("style", 'position: fixed;top: 20px;z-index:10000;right: 20px;')
document.body.appendChild(div);


const notice = (options) => {
    if (typeof options === 'string' || typeof options === 'number') {
        options = {
            title: options
        };
    }
    const NoticeInstance = new NoticeConstructor();
    NoticeInstance.vm = NoticeInstance.$mount();
    NoticeInstance.vm.duration = options.duration !== undefined ? options.duration : 4000;
    NoticeInstance.vm.type = options.type;
    NoticeInstance.vm.title = options.title;
    NoticeInstance.vm.message = options.message;
    NoticeInstance.vm.dom = NoticeInstance.$el;
    document.getElementsByClassName('ruyi-notice-wapper')[0].appendChild(NoticeInstance.dom);
    return NoticeInstance
}

['success', 'warning', 'error', 'primary'].forEach(v => {
    notice[v] = options => {
        if (typeof options === 'string') {
            options = {
                title: options
            };
        } else {
            options = {
                title: options.title,
                message: options.message,
                duration: options.duration
            }
        }
        options.type = v;
        return notice(options);
    };
})

export default notice;