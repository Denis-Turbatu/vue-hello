console.log(Vue);

const { createApp } = Vue;

createApp({
    data(){
        return{
            greeting: "Hello World!",
            imageUrl: "./img/image.png",
        };
    },
    methods: {
    },
}).mount('#app');
