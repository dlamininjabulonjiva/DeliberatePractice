import { shallowMount } from '@vue/test-utils'
import Tab from '@/components/Tab.vue'

describe('TabNav.vue', () => {
    describe('Props', () => {
        it('should have props', () => {
          // Arrange
          const isSelected = false;
          const wrapper = wrapperFactory(isSelected);
          // Act
          const actual = wrapper.props();
          // Assert
          expect(actual.isSelected).toBeDefined();
        });
    
        it('should set values to props', () => {
          // Arrange
          const isSelected = true;
          const wrapper = wrapperFactory(isSelected);
          // Act
          const actual = wrapper.props();
          // Assert
          expect(actual.isSelected).toBe(isSelected);
        });
    });

    function wrapperFactory(isSelected) {
        return shallowMount(Tab, {
            propsData: {
                isSelected: isSelected
            }
        })
    }
})