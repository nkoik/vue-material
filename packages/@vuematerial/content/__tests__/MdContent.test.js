import mountTemplate from '@vuematerial/test-utils/mountTemplate'
import MdContent from '../components/MdContent'

test('should render the content', async () => {
  const template = '<md-content>Lorem ipsum</md-content>'
  const wrapper = await mountTemplate(MdContent, template)

  expect(wrapper.hasClass('md-content')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-content md-theme="alt">Lorem ipsum</md-content>'
  const wrapper = await mountTemplate(MdContent, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})