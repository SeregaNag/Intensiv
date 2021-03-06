const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsTitleElems = document.querySelectorAll('.design__title')
// btn.dataSet.tabsHandler
for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        tabsContentElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })

        tabsTitleElems.forEach(title => {
            if (title.dataset.someAttr === btn.dataset.someAttr) {
                title.classList.remove('hidden')
            } else {
                title.classList.add('hidden')
            }
        })
    })
}