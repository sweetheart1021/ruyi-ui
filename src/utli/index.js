/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-06 13:53:47
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-06 13:57:34
 */
export function findComponentsDownward (context, componentName, components = []) {
    const childrens = context.$children
    if (childrens.length) {
        childrens.forEach(child => {
            const subChildren = child.$children
            const name = child.$options.name

            if (name === componentName) {
                components.push(child)
            }
            if (subChildren.length) {
                const findChildren = findComponentsDownward(child, componentName, components)
                if (findChildren) {
                    components.concat(findChildren)
                }
            }
        })
    }

    return components
}