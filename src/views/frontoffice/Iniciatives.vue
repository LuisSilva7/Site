<template>
  <h1>wqd</h1>
  <button @click="enviar">enviar email</button>
</template>

<script>
export default {
  methods: {
    enviar() {
      var templateParams = {
                email: 'lmpsilva7@gmail.com',
                name: 'luis',
                theme: 'aula',
                local: 'braga',
                targetAudience: 'adultos',
                objective: 'objetivo',
                date: 'data',
              }

              emailjs.send('service_lzqa2yd', 'template_61dy7j5', templateParams).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                  console.log('FAILED...', error)
                }
              )

    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    document.body.appendChild(script);

    script.onload = () => {
      emailjs.init({
        publicKey: 'acllVfUK9wSzqr0g1',
      })
    }
  }
}
</script>

<style>

</style>