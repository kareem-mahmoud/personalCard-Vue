const app = Vue.createApp({
    data() {
        return {
            name: "Kareem",
            age: 27,
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        };
    },
    methods: {
        calAge() {
            return this.age + 5;
        },
        randomNumber() {
            const RN = Math.random();
            return RN;
        }
    }
}).mount('#assignment');