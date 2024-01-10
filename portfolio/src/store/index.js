import { createStore } from 'vuex'
const dataUrl = 'https://gcusaaa.github.io/todayPortfolioData/data'
export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    }
  },
  actions: {
    async fetchEducation(context){
      let res = await fetch(dataUrl)
      let {education} = await res.json()
      context.commit('setEducation', education)
    },
    async fetchSkills(context) {
      let {skills} = await (await fetch(dataUrl)).json()
      context.commit('setSkills', skills )
    }
  },
  modules: {
  }
})
