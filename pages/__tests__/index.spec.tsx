import { shallow } from 'enzyme'
import Home from '../'

describe('<Home />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Home />)
        wrapper.unmount()
    })
})
