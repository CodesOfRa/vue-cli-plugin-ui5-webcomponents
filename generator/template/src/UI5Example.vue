<template>
  <div>
    <ui5-toolbar class="header-toolbar">
      <ui5-title class="app-title">UI5 Web Components CLI Plugin Example</ui5-title>
    </ui5-toolbar>
    <ui5-tabcontainer class="full-width" collapsed fixed show-overflow selected-index="2">
      <ui5-tab v-for="tab in tabs" :key="tab" :text="tab"></ui5-tab>
    </ui5-tabcontainer>
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Toolbar";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
export default {
  data: function() {
    return {
      tabs: ["Home", "About", "News", "Contacts"]
    };
  }
};
</script>