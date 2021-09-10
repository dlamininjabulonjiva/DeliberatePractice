import { shallowMount } from '@vue/test-utils'
import TabNav from '@/components/TabNav.vue'

describe('TabNav.vue', () => {
  describe('Props', () => {
    it('should have props', () => {
      // Arrange
      const tabs = [];
      const selected = '';
      const wrapper = createWrapper(tabs, selected);
      // Act
      const actual = wrapper.props();
      // Assert
      expect(actual.tabs).toBeDefined();
      expect(actual.selected).toBeDefined();
    })

    it('should set values to props', () => {
      // Arrange
      const tabs = ['tab1', 'tab2', 'tab3'];
      const selected = 'tab1';
      const wrapper = createWrapper(tabs, selected);
      // Act
      const actual = wrapper.props();
      // Assert
      expect(actual.tabs).toStrictEqual(tabs);
      expect(actual.selected).toBe(selected);
    })
  })

  function createWrapper(tabs, selected) {
    return shallowMount(TabNav, {
      propsData: {
        tabs: tabs,
        selected: selected
      }
    })
  }
})
