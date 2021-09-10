<template>
  <div id="app">
    <TabNav :tabs="allTabs" :selected="selected" @selected="setSelected" >
      <Tab :isSelected="selected === 'Delivery Managers'" >
        <br><br>
        <div v-if="loading" class="spinner-border loader text-primary" role="status">
        </div>
        <p v-if="!loading">These are all our delivery managers</p>
        <table v-if="!loading" class="table table-hover table-bordered">
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
        <div v-if="loading" class="spinner-border loader text-primary" role="status">
        </div>
        <p v-if="!loading">These are all our senior developers</p>
        <table v-if="!loading" class="table table-hover table-bordered">
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
        <div v-if="loading" class="spinner-border loader text-primary" role="status">
        </div>
        <p v-if="!loading">These are all our junior developers</p>
        <table v-if="!loading" class="table table-hover table-bordered">
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
  import api from '@/apiService';

  export default {
    name: 'App',
    components: { TabNav, Tab },
    data() {
      return {
        loading: true,
        selected: 'Delivery Managers',
        managers: [],
        seniorDevelopers: [],
        juniorDevelopers: [],
        allTabs: []
      }
    },
    async created() {
      this.allTabs = ['Delivery Managers', 'Senior Developers', 'Junior Developers'];
      this.currentlySelectTab(this.selected);
    },
    methods: {
      setSelected(tab) {
        this.selected = tab;
        this.currentlySelectTab(this.selected);
      },
      currentlySelectTab(tabSelected) {
        switch(tabSelected) {
          case 'Delivery Managers':
            this.getDeliveryManagers()
            break;
          case 'Senior Developers':
            this.getSeniorDevelopers();
            break;
          case 'Junior Developers':
            this.getJuniorDevelopers();
            break;
        }
      },
      async getDeliveryManagers() {
        this.loading = true;
        try {
          let data = await api.getDeliveryManagers();
          this.managers = data.managers;
        } finally {
          this.loading = false;
        }
      },
      async getSeniorDevelopers() {
        this.loading = true;
        try {
          let data = await api.getSeniorDevelopers();
          this.seniorDevelopers = data.seniors;
        } finally {
          this.loading = false;
        }
      },
      async getJuniorDevelopers() {
        this.loading = true;
        try {
          let data = await api.getJuniorDevelopers();
          this.juniorDevelopers = data.juniors;
        } finally {
          this.loading = false;
        }
      },
    },
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

  .loader {
    left: 50%;
    margin-left: 50%;
  }
</style>
