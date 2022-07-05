const key = Vue.createApp({
    template: `
    <input type='text' @keypress='keyHandler'/>
    <p v-if="show">You pressed the singular A key in either small caps or big caps</p>
    `,
    data: function(){
        return{
            show: false
        }
    },
    methods:{
        keyHandler(e){
            console.log(e)
            console.log(e.key);
            if (e.code = 'KeyA') {
                this.show = true
            }
            if (e.code != 'KeyA'){
                this.show = false
            }
        }
    }
})
key.mount('#key')