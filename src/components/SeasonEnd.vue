<template>
  <div class="container">
  	
    <p>{{condition}}</p>
    <p>{{mood}}</p>

    <ul class="choices">
      <li v-on:click="goToLottery"><a href="javascript://">Go to Lottery</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'season-end',
  data () {
    return {
      
    }
  },
  methods: {
    goToLottery: function() {
      if(this.$store.state.mood === 'Your owner is quietly mulling options for replacing you; be careful.') {
        this.$store.state.firstRounder = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
      }

      if(this.$store.state.mood === 'Your owner is seriously considering firing you.') {
        this.$store.state.firstRounder = Math.floor(Math.random() * 4) + 1;
      }

      if(this.$store.state.mood === 'Your owner is willing to give you another year to assemble your vision.' || this.$store.state.mood === "Your owner isn't sure what your strategy is.") {
        this.$store.state.firstRounder = Math.floor(Math.random() * (15 - 6 + 1)) + 6;
      }

      this.$store.state.stage = 'lottery';
    }
  },
  computed: {
    condition() {
      return this.$store.state.condition;
    },
    mood() {
      return this.$store.state.mood;
    }
  }
}
</script>
