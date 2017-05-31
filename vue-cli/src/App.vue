<!-- define template -->
<template>
<div id="app">
	<message>
		HELLO-O-O
	</message>
	<counter>

	</counter>
</div>
</template>

<!-- import required components -->
<script>
import Message from './components/Message.vue';
import Counter from './components/Counter.vue';

export default {
	name: 'app',
	components: {
		Message,
		Counter
	},
	// reference data if neccesary
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 160px;

}

h1,
h2 {
    font-weight: bold;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
