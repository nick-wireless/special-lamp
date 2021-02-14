import { mount } from '@vue/test-utils'
import Hello from './Hello.vue'

describe('Hello', () => {
    it('renders the list of key libraries used', () => {
        const wrapper = mount(Hello, {
            props: { msg: 'We have packages.'}
        })
        // console.log(wrapper.html())
        expect(wrapper.findAll('[data-test="keyPackages"]')).toHaveLength(5)
    })
})