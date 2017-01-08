<template>
  <div class="container">
    <h1>Preseason</h1>

    <ul class="choices">
      <li v-on:click=""><a href="javascript://">A</a></li>
      <li v-on:click=""><a href="javascript://">B</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'preseason',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    
  },
  computed: {
    draftPicks() {
      return this.$store.state.draftPicks;
    },
    secondRoundPicksMade() {
      return this.$store.state.secondRoundPicksMade;
    },
    secondRoundPlayersDrafted() {
      return this.$store.state.secondRoundPlayersDrafted;
    }
  }
}
</script>
