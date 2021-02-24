import { newStyling } from './styling-logic'
import { mount } from '@vue/test-utils'
import SimplestElement from './components/SimplestElement.vue'

const wrapper = mount(SimplestElement)

describe('Styling-Logic', () => {
    it('adds a style attribute to an empty html element', () => {
        console.log(wrapper.html())
    })
})