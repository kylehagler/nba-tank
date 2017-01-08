<template>
  <div class="container">
  	
    <span v-html="content"></span>

    <ul class="choices">
      <li v-if="!coachHired" v-on:click="hireCoach"><a href="javascript://">Hire a coach</a></li>
    </ul>
  	
  </div>
</template>

<script>

export default {
  name: 'sign-d-league-players',
  data() {
    return {
      content: '<p>After scouring the D-League, you have signed various cheap fringe-NBA players. You have done this without first hiring a coach, which may lead to problems.</p><p>What now?</a>'
    }
  },
  methods: {
    hireCoach: function() {
    	this.$store.state.condition = 'blunder';
      this.$store.state.moves += 1;
      this.$store.state.stage = 'hire coach';
    }
  },
  computed: {
    condition() {
      return this.$store.state.condition;
    },
    draftPicks() {
      return this.$store.state.draftPicks;
    },
    coachHired() {
      return this.$store.state.coachHired;
    }
  }
}
</script>
