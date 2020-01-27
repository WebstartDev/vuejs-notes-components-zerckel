let app = new Vue({
  el: '#app',
  data: {
      cards: []
  },
  methods:{
    create:function () {
        this.cards.push({
          text: 'empty note',
          modif: false
        })
    }
  }

})