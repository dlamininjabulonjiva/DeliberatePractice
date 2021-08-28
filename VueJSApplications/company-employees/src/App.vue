<template>
  <div id="app">
    <TabNav :tabs="['Delivery Managers', 'Senior Developers', 'Junior Developers']" :selected="selected" @selected="setSelected" >
      <Tab :isSelected="selected === 'Delivery Managers'" >
        <br><br>
        <p>These are all our delivery managers</p>
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="manager in managers" :key="manager.id">
              <th scope="row">
                {{ manager.id }}
              </th>
              <td>
                {{ manager.name }}
              </td>
              <td>
                {{ manager.surname }}
              </td>
              <td>
                {{ manager.email }}
              </td>
              <td>
                {{ manager.phone_number }}
              </td>
            </tr>
          </tbody>
        </table>
      </Tab>
      <Tab :isSelected="selected === 'Senior Developers'" >
        <br><br>
        <p>These are all our senior developers</p>
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="seniorDeveloper in seniorDevelopers" :key="seniorDeveloper.id">
              <th scope="row">
                {{ seniorDeveloper.id }}
              </th>
              <td>
                {{ seniorDeveloper.name }}
              </td>
              <td>
                {{ seniorDeveloper.surname }}
              </td>
              <td>
                {{ seniorDeveloper.email }}
              </td>
              <td>
                {{ seniorDeveloper.phone_number }}
              </td>
            </tr>
          </tbody>
        </table>
      </Tab>
      <Tab :isSelected="selected === 'Junior Developers'" >
        <br><br>
        <p>These are all our junior developers</p>
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="juniorDeveloper in juniorDevelopers" :key="juniorDeveloper.id">
              <th scope="row">
                {{ juniorDeveloper.id }}
              </th>
              <td>
                {{ juniorDeveloper.name }}
              </td>
              <td>
                {{ juniorDeveloper.surname }}
              </td>
              <td>
                {{ juniorDeveloper.email }}
              </td>
              <td>
                {{ juniorDeveloper.phone_number }}
              </td>
            </tr>
          </tbody>
        </table>
      </Tab>
    </TabNav>
  </div>
</template>

<script>
  import TabNav from './components/TabNav.vue';
  import Tab from './components/Tab.vue';
  import axios from 'axios'

  export default {
    name: 'App',
    components: { TabNav, Tab },
    data() {
      return {
        selected: 'Delivery Managers',
        managers: [],
        seniorDevelopers: [],
        juniorDevelopers: [],
        employees: []
      }
    },
    methods: {
      setSelected(tab) {
        this.selected = tab;
        this.currentlySelectTab(this.selected, this.employees);
      },
      currentlySelectTab(tabSelected, data) {
        switch(tabSelected) {
          case 'Delivery Managers':
            this.managers = data.managers;
            this.seniorDevelopers = [];
            this.juniorDevelopers = [];
            break;
          case 'Senior Developers':
            this.seniorDevelopers = data.seniors;
            this.managers = [];
            this.juniorDevelopers = [];
            break;
          case 'Junior Developers':
            this.juniorDevelopers = data.juniors;
            this.seniorDevelopers = [];
            this.managers = [];
            break;
        }
      }
    },
    async mounted(){
      let apiResults = await axios.get("https://run.mocky.io/v3/ba2304f3-49b5-4c13-a09e-3459ebbec294");
      this.employees = apiResults.data;
      this.currentlySelectTab(this.selected, this.employees);
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
