import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		stage: 'start',
		coachHired: false,
		moves: 0,
		condition: null,
		draftPicks: 0,
		mood: null,
		coachStatus: null,
		random: 0,
		firstPickMade: false,
		firstPlayerDrafted: null,
		secondRoundPicksMade: false,
		secondRoundPlayersDrafted: [],
		numStars: 0
	}
}); 