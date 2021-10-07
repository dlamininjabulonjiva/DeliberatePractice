import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import api from '@/apiService';

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

    describe('Fields', () => {
        describe('P Tag', () => {
            it('should display message when delivery managers tab is selected', async () => {
                // Arrange
                const expectedMessage = "These are all our delivery managers";
                const selectedTab = 'Delivery Managers';
                const managers = {
                    data : []
                };
                const wrapper = wrapperFactory();
                jest.spyOn(api, "getDeliveryManagers").mockReturnValue(managers);
                // Act
                await wrapper.vm.setSelected(selectedTab);
                const actual = wrapper.find(".deliveryManagers");
                // Assert
                expect(actual.exists()).toBe(true);
                expect(actual.text()).toBe(expectedMessage);
            });
    
            it('should display message when senior developers tab is selected', async () => {
                // Arrange
                const expectedMessage = "These are all our senior developers";
                const selectedTab = 'Senior Developers';
                const seniors = {
                    data : []
                };
                const wrapper = wrapperFactory();
                jest.spyOn(api, "getSeniorDevelopers").mockReturnValue(seniors);
                // Act
                await wrapper.vm.setSelected(selectedTab);
                const actual = wrapper.find(".seniorDevelopers");
                // Assert
                expect(actual.exists()).toBe(true);
                expect(actual.text()).toBe(expectedMessage);
            });
    
            it('should display message when junior developers tab is selected', async () => {
                // Arrange
                const expectedMessage = "These are all our junior developers";
                const selectedTab = 'Junior Developers';
                const junior = {
                    data : []
                };
                const wrapper = wrapperFactory();
                jest.spyOn(api, "getJuniorDevelopers").mockReturnValue(junior);
                // Act
                await wrapper.vm.setSelected(selectedTab);
                const actual = wrapper.find(".juniorDevelopers");
                // Assert
                expect(actual.exists()).toBe(true);
                expect(actual.text()).toBe(expectedMessage);
            });
        });
    });
    
    describe('Methods', () => {
        it('should set selected tab', () => {
            // Arrange
            const selectedTab = 'Senior Developers';
            const wrapper = wrapperFactory();
            // Act
            wrapper.vm.setSelected(selectedTab);
            // Assert
            expect(wrapper.vm.selected).toBe(selectedTab);
        });

        it('should get all managers when delivery managers tab is selected', async () => {
            // Arrange
            const selectedTab = 'Delivery Managers';
            const managers = {
                data : [
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
                ]
            };
            const wrapper = wrapperFactory();
            jest.spyOn(api, "getDeliveryManagers").mockReturnValue(managers);
            // Act
            await wrapper.vm.setSelected(selectedTab);
            // Assert
            expect(wrapper.vm.managers).toEqual(managers.data);
        });

        it('should get all seniors when senior developers tab is selected', async () => {
            // Arrange
            const selectedTab = 'Senior Developers';
            const seniors = {
                data : [
                    {
                        id: 1,
                        name: 'Nick',
                        surname: 'Boyle',
                        email: 'nick@test.co.za',
                        phoneNumber: '0817644456'
                    },
                    {
                        id: 2,
                        name: 'Deandre',
                        surname: 'Watkins',
                        email: 'deandre@test.co.za',
                        phoneNumber: '0713665456'
                    },
                    {
                        id: 3,
                        name: 'Kirk',
                        surname: 'Cousins',
                        email: 'kirk@test.co.za',
                        phoneNumber: '0623665496'
                    }
                ]
            };
            const wrapper = wrapperFactory();
            jest.spyOn(api, "getSeniorDevelopers").mockReturnValue(seniors);
            // Act
            await wrapper.vm.setSelected(selectedTab);
            // Assert
            expect(wrapper.vm.seniorDevelopers).toEqual(seniors.data);
        });

        it('should get all juniors when junior developers tab is selected', async () => {
            // Arrange
            const selectedTab = 'Junior Developers';
            const juniors = {
                data : [
                    {
                        id: 1,
                        name: 'Tyrick',
                        surname: 'Hill',
                        email: 'tyrick@test.co.za',
                        phoneNumber: '0797644456'
                    },
                    {
                        id: 2,
                        name: 'Gus',
                        surname: 'Edwards',
                        email: 'gus@test.co.za',
                        phoneNumber: '0763665456'
                    },
                    {
                        id: 3,
                        name: 'Travis',
                        surname: 'Kelce',
                        email: 'travis@test.co.za',
                        phoneNumber: '0723642536'
                    }
                ]
            };
            const wrapper = wrapperFactory();
            jest.spyOn(api, "getJuniorDevelopers").mockReturnValue(juniors);
            // Act
            await wrapper.vm.setSelected(selectedTab);
            // Assert
            expect(wrapper.vm.juniorDevelopers).toEqual(juniors.data);
        });
    });

    function wrapperFactory() {
        return shallowMount(App, {
        })
    }
});