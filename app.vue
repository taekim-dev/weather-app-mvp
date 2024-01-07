<template>
  <div>
    <p>Greeting</p>
    <p>{{ $t("greeting") }}</p>
    <p>{{ greeting }}</p>
    <InputForm />
  </div>
</template>
<script>
export default {
  data() {
    return {
      greeting: 'Loading...'
    }
  },
  async mounted(){
    try {
      const response = await fetch('api/hello');
      const data = await response.json();
      this.greeting = data.message;
    } catch (error) {
      console.error('Error fetching greeting: ', error);
      this.greeting = 'Error fetching greeting';
    }
  }
}
</script>