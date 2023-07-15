Vue.createApp({
    data() {
        return {
            isBored: false,
            haveTime: false,
            correctPassword: false,
            password: '394',
            enteredPassword: '',
            anotherTime: false
        };
    },
    
    methods: {
        changeToBored() {
            this.isBored = true;
        },
        changeHaveTime() {
            this.haveTime = true;
        },
        checkCorrectPassword() {
            if (this.enteredPassword === this.password) {
                this.correctPassword = true;
            } else {
                alert('Incorrect Password!');
            }
        }
    }

}).mount('#game');