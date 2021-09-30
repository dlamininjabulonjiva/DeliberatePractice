import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
    describe('SetData', () => {
        it('should define all properties in setData', () => {
            // Arrange
            const wrapper = wrapperFactory();
            // Act
            wrapper.setData({
              loading: false,
              selected: '',
              managers: [],
              seniorDevelopers: [],
              juniorDevelopers: [],
              allTabs: []
            });
            // Assert
            expect(wrapper.vm.loading).toBeDefined();
            expect(wrapper.vm.selected).toBeDefined();
            expect(wrapper.vm.managers).toBeDefined();
            expect(wrapper.vm.seniorDevelopers).toBeDefined();
            expect(wrapper.vm.juniorDevelopers).toBeDefined();
            expect(wrapper.vm.allTabs).toBeDefined();
        });
    });

    describe('Methods', () => {
        it('should set selected tab', () => {
            // Arrange
            const selectedTab = 'Delivery Managers';
            const wrapper = wrapperFactory();
            // Act
            wrapper.vm.setSelected(selectedTab);
            // Assert
            expect(wrapper.vm.selected).toBe(selectedTab);
        });

        xit('should get all managers when Delivery Managers tab is selected', () => {
            // Arrange
            const selectedTab = 'Delivery Managers';
            const managers = [
                {
                    id: 1,
                    name: 'Lamar',
                    surname: 'Jackson',
                    email: 'lamar@test.co.za',
                    phoneNumber: '0317144456'
                },
                {
                    id: 2,
                    name: 'Patrick',
                    surname: 'Mahomes',
                    email: 'patric@test.co.za',
                    phoneNumber: '0813694456'
                }
            ];
            const wrapper = wrapperFactory();
            jest.spyOn(wrapper.vm, "getDeliveryManagers").mockResolvedValue(managers);
            // Act
            wrapper.vm.setSelected(selectedTab);
            // Assert
            // expect(wrapper.vm.managers).toBe(managers);
        });
    });

    function wrapperFactory() {
        return shallowMount(App, {
        })
    }
});