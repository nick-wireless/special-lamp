import { mount } from '@vue/test-utils'
import Hello from './Hello.vue'

const wrapper = mount(Hello, {
    props: { msg: 'We have packages.'}
})

describe('Hello', () => {
    it('renders the list of key libraries used', () => {
        // console.log(wrapper.html())
        expect(wrapper.findAll('[data-test="keyPackages"]')).toHaveLength(5)
    })

    it('adds padding to the first element in the list', () => {
        // console.log(wrapper.html())
    })
})