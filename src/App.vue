<template>
  <div id="app">
    <start-season v-if="$store.state.stage === 'start'"></start-season>
    
    <trade-players-for-picks v-if="$store.state.stage === 'trade players for picks'"></trade-players-for-picks>
    
    <hire-coach v-if="$store.state.stage === 'hire coach'"></hire-coach>

    <sign-d-league-players v-if="$store.state.stage === 'sign d-league players'"></sign-d-league-players>

    <no-vets-but-input v-if="$store.state.stage === 'no vets but ask input'"></no-vets-but-input>

    <do-whatever v-if="$store.state.stage === 'do whatever you want'"></do-whatever>

    <listen-do-whatever v-if="$store.state.stage === 'listen but do whatever you want'"></listen-do-whatever>

    <sign-veterans v-if="$store.state.stage === 'sign veterans'"></sign-veterans>

    <season-end v-if="$store.state.stage === 'end of season'"></season-end>

    <lottery v-if="$store.state.stage === 'lottery'"></lottery>

    <play-again v-if="$store.state.stage === 'play again'"></play-again>

    <silicon-valley v-if="$store.state.stage === 'silicon valley'"></silicon-valley>

    <draft-night v-if="$store.state.stage === 'draft night'"></draft-night>

    <second-round v-if="$store.state.stage === 'second round'"></second-round>

    <preseason v-if="$store.state.stage === 'preseason'"></preseason>
  </div>
</template>

<script>
import Vue from 'vue'
import StartSeason from './components/StartSeason'
import TradePlayersForPicks from './components/TradePlayersForPicks'
import HireCoach from './components/HireCoach'
import SignDLeaguePlayers from './components/SignDLeaguePlayers'
import NoVetsButInput from './components/NoVetsButInput'
import DoWhatever from './components/DoWhatever'
import ListenDoWhatever from './components/ListenDoWhatever'
import SignVeterans from './components/SignVeterans'
import SeasonEnd from './components/SeasonEnd'
import Lottery from './components/Lottery'
import DraftNight from './components/DraftNight'
import SecondRound from './components/SecondRound'
import PlayAgain from './components/PlayAgain'
import SiliconValley from './components/SiliconValley'
import Preseason from './components/Preseason'

export default {
  name: 'app',
  components: {
    StartSeason,
    TradePlayersForPicks,
    HireCoach,
    SignDLeaguePlayers,
    NoVetsButInput,
    DoWhatever,
    ListenDoWhatever,
    SignVeterans,
    SeasonEnd,
    Lottery,
    DraftNight,
    SecondRound,
    Preseason,
    PlayAgain,
    SiliconValley
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 960px;
  margin: 100px auto;
  text-align: left;
  padding: 0 50px;
}

ul.choices {
  list-style: none;
  padding-left: 0;
  margin-top: 50px;
}

ul.choices li {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #0E8832;
}

a:hover {
  text-decoration: underline;
}
</style>
