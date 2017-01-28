import Vue from 'vue'
import FormDetails from 'src/components/FormDetails'

describe('FormDetails.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(FormDetails)
        })
        expect(vm.test())
            .to.equal('test')
    })
})
