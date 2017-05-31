//vue component
//slot allow user to type bettween tags
Vue.component('modal', {
	template: `<modal>
	<div class="modal is-active">
		<div class="modal-background"></div>
		<div class="modal-content">
			<div class="box">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusamus ipsam laboriosam quia, reprehenderit nam, non, cupiditate dignissimos deleniti laudantium tenetur totam magni sapiente amet omnis iure maiores voluptatum asperiores!</p>
			</div>
		</div>
		<button class="modal-close"></button>
	</div>
</div>
</modal>`
,

});




methods:{
	hideModal() {
		this.isVisible= false;
	}
}

});

new Vue({
	el: '#root'
});
