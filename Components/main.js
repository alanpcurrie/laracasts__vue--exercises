//vue component
//slot allow user to type bettween tags
Vue.component('task', {
	template: '<li><slot></slot><li/>'
});

new Vue({
	el: '#root'
});
