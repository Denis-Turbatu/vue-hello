console.log(Vue);

const { createApp } = Vue;

createApp({
    data(){
        return{
            greeting: "Hello World!",
        };
    },
    methods: {
    },
}).mount('#app');
