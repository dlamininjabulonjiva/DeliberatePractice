<template>
  <div id="app">
    <TabNav :tabs="['Delivery Managers', 'Senior Developers', 'Junior Developers']" :selected="selected" @selected="setSelected" >
      <Tab :isSelected="selected === 'Delivery Managers'" >
        <p>Some test text</p>
      </Tab>
      <Tab :isSelected="selected === 'Software Developers'" >
        <h1>More test text</h1>
      </Tab>
      <Tab :isSelected="selected === 'Junior Developers'" >
        <ul>
          <li>List test 1</li>
          <li>List test 2</li>
          <li>List test 3</li>
        </ul>
      </Tab>
    </TabNav>
  </div>
</template>

<script>
  import TabNav from './components/TabNav.vue';
  import Tab from './components/Tab.vue';

  export default {
    name: 'App',
    components: { TabNav, Tab },
    data() {
      return {
        selected: 'Delivery Managers'
      }
    },
    methods: {
      setSelected(tab) {
        this.selected = tab;
      }
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
