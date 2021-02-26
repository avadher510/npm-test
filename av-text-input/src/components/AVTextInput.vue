<template>
  <div>
    <v-btn class="ma-2" color="info" @click="onButtonClickHandler()">
      Load Dialog
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AVTextInput extends Vue {
  @Prop({ default: "Enter your text..." })
  text!: string;
  @Prop()
  btnClick!: Function;

  onButtonClickHandler(): void {
    this.$emit("btn-click", this.btnClick("CLICKED IT"));
  }
}
</script>

<style scoped></style>
