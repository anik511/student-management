<template>
  <div class="home">
    <h1>Hi my name is {{ name }} and my role is {{ role }}</h1>
    <input type="text" placeholder="Name" v-model="name" />
    <input type="number" placeholder="Role" v-model="role" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      name: null,
      role: null,
    };
  },
  methods: {
    deBugger() {
      console.log(this.name, this.role);
      console.log("deBugger");
    },
    submit() {
      console.log(this.name, this.role);
      this.deBugger();
    },
  },
};
</script>
