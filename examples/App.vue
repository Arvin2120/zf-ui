<template>
  <div id="app">
    <div class="row">
      <ax-button type="primary">按钮</ax-button>
      <ax-button type="success">按钮</ax-button>
      <ax-button type="info">按钮</ax-button>
      <ax-button type="warning">按钮</ax-button>
      <ax-button type="danger">按钮</ax-button>
      <ax-button type="text">按钮</ax-button>
      <ax-button type="medium">按钮</ax-button>
      <ax-button type="small">按钮</ax-button>
      <ax-button type="mini">按钮</ax-button>
    </div>
    <div class="row">
      <ax-button type="primary" plain>按钮</ax-button>
      <ax-button type="primary" disabled>按钮</ax-button>
      <ax-button type="primary" round>按钮</ax-button>
      <ax-button type="primary" circle>圆</ax-button>
      <ax-button type="primary" :icon="'ax-icon-check'" @click="click"></ax-button>
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    click(e){
      console.log(e)
    }
  }
};
</script>

<style lang="scss">
</style>
