Vue.component('card', {
  name: 'card',
  props: ['card'],
  template: `<span>
            <div v-on:click="update(card.id)" class="note">
                <span> {{card.text}} </span>
                <span> {{card.text.length}}</span>
            </div>
            <div v-on:click="deleteNote(card.id)" class="delete">
                DELETE NOTE
            </div>
            <textarea v-if="card.modify"  class="modify" v-model="card.text"></textarea>
            </span>  
`,
  methods:{
    update: function (elem) {
      this.$emit('update-note', elem)
    },
    deleteNote: function (elem) {
      this.$emit('delete-note', elem)
    }
  }
})

let app = new Vue({
  el: '#app',
  data: {
      cards: []
  },
  methods:{
    create:function () {
      let nbr = this.cards.length
        this.cards.push({
          id: nbr,
          text: 'empty note',
          modify: false,
          countWord: 0
        })
      localStorage.setItem('cards', JSON.stringify(this.cards))
    },
    deleteNote: function (elem) {
      this.cards[elem].text = false
      localStorage.setItem('cards', JSON.stringify(this.cards))
    },
    update: function(elem){
      console.log('ok')
      if (this.cards[elem].modify === true){
        this.cards[elem].modify = false
      }else if (this.cards[elem].modify === false){
        this.cards[elem].modify = true
      }
      localStorage.setItem('cards', JSON.stringify(this.cards))
    }

  },
  mounted:function () {
    if (localStorage.getItem('cards') !== null){
      this.cards = JSON.parse(localStorage.getItem('cards'))
    }
  }
})

