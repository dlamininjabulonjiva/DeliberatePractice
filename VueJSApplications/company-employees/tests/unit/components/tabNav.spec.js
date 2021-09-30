import { shallowMount } from '@vue/test-utils'
import TabNav from '@/components/TabNav.vue'

describe('TabNav.vue', () => {
  describe('Props', () => {
    it('should have props', () => {
      // Arrange
      const tabs = [];
      const selected = '';
      const wrapper = wrapperFactory(tabs, selected);
      // Act
      const actual = wrapper.props();
      // Assert
      expect(actual.tabs).toBeDefined();
      expect(actual.selected).toBeDefined();
    });

    it('should set values to props', () => {
      // Arrange
      const tabs = ['tab1', 'tab2', 'tab3'];
      const selected = 'tab1';
      const wrapper = wrapperFactory(tabs, selected);
      // Act
      const actual = wrapper.props();
      // Assert
      expect(actual.tabs).toStrictEqual(tabs);
      expect(actual.selected).toBe(selected);
    });
  });

  describe('Methods', () => {
    it("should call setTab method when a tab is clicked", () => {
      // Arrange
      const tabs = ['tab1', 'tab2', 'tab3'];
      const selected = 'tab1';
      const wrapper = wrapperFactory(tabs, selected);
      jest.spyOn(wrapper.vm, "setTab");
      // Act
      wrapper.find(".nav-link").trigger("click");
      // Assert
      expect(wrapper.vm.setTab).toBeCalledTimes(1);
    });
  
    it("should trigger selected event when the setTab method is called", () => {
      // Arrange
      const tabs = ['tab1', 'tab2', 'tab3'];
      const selected = 'tab1';
      const wrapper = wrapperFactory(tabs, selected);
      const stub = jest.fn();
      wrapper.vm.$on("selected", stub);
      // Act
      wrapper.vm.setTab(selected);
      // Assert
      expect(stub).toBeCalledWith(selected);
    });
  });

  function wrapperFactory(tabs, selected) {
    return shallowMount(TabNav, {
      propsData: {
        tabs: tabs,
        selected: selected
      }
    })
  }
})
