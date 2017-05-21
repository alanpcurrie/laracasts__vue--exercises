Vue.component('task-list', {
	//wrap in a div to create a single root element
	// template: '<div><task v-for = "task in tasks">{{task.task}}</task></div>',
// as above wbut with es6 template literal
		template: `<div>
								<task v-for = "task in tasks">{{task.task}}</task>
							</div>`,

	data() {
		return {
			tasks: [{
					description: 'click',
					completed: true
				},
				{
					description: 'run',
					completed: false
				},
				{
					description: 'take credits',
					completed: false
				},
				{
					description: 'score agenda',
					completed: false
				},
				{
					description: 'rez ice',
					completed: false
				},
				{
					description: 'take a tag',
					completed: true
				}
			]

		};
	}
});


//vue component
//slot allow user to type bettween tags
Vue.component('task', {
	template: '<li><slot></slot><li/>'
});

new Vue({
	el: '#root'
});
