<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Test Form
        </v-card-title>

        <v-text-field v-model="name" label="Your Name"></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import {
  VCardTitle,
  VDialog,
  VBtn,
  VTextField,
  VCardActions,
  VSpacer,
  VCard
} from "vuetify/lib";

@Component({
  components: {
    VCardTitle,
    VDialog,
    VBtn,
    VTextField,
    VCardActions,
    VSpacer,
    VCard
  }
})
export default class AVTextInput extends Vue {
  @Prop({ default: "Enter your text..." })
  text!: string;
  @Prop()
  btnClick!: Function;
  @Prop()
  yourNameFn!: Function;

  dialog = false;
  name = "";

  @Watch("name")
  onNameChangeHandler(val: string): void {
    this.yourNameFn(val);
  }

  onButtonClickHandler(): void {
    this.$emit("btn-click", this.btnClick("CLICKED IT"));
    this.dialog = !this.dialog;
  }
}
</script>

<style scoped></style>
