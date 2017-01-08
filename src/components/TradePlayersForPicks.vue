<template>
  <div class="container">
  	<span v-html="content"></span>
  	<p>Second round picks: <span v-html="draftPicks"></span></p>
  	<p>What would you like to do now?</p>

  	<ul class="choices">
      <li v-if="!coachHired" v-on:click="hireCoach"><a href="javascript://">Hire a coach</a></li>
      <li v-on:click="signDLeaguePlayers"><a href="javascript://">Sign D-League players</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'trade-players-for-picks',
  data() {
    return {
      content: '<p>After trading away your players, you have recieved various picks in return.</p>'
    }
  },
  methods: {
    hireCoach: function() {
    	this.$store.state.condition = 'blunder';
      this.$store.state.moves += 1;
    	this.$store.state.stage = 'hire coach';
    },
    signDLeaguePlayers: function() {
    	this.$store.state.condition = 'blunder';
      this.$store.state.moves += 1;
    	this.$store.state.stage = 'sign d-league players';
    }
  },
  computed: {
    draftPicks() {
      return this.$store.state.draftPicks;
    },
    coachHired() {
      return this.$store.state.coachHired;
    }
  }
}
</script>
