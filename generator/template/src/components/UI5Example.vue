<template>
  <div>
    <ui5-shellbar primary-title="UI5 Web Components CLI Plugin Example"></ui5-shellbar>
    <ui5-tabcontainer show-overflow>
      <ui5-tab v-for="tab in tabs" :key="tab" :text="tab">
        <ui5-button @click="onClick(tab)">{{tab}}</ui5-button>
        <ui5-icon v-show="tab==='Home'" src="sap-icon://add-employee"></ui5-icon>
      </ui5-tab>
    </ui5-tabcontainer>
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
export default {
  data: function() {
    return {
      tabs: ["Home", "About", "News", "Contacts"]
    };
  },
  methods: {
    onClick(text) {
      console.log(text);
    }
  }
};
</script>
