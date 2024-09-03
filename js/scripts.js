const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            emails: []
        };
    },
    created() {

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                const email = res.data.response;
                console.log('email:', email);
                this.emails.push(email);
            });
    }
}).mount('#app');