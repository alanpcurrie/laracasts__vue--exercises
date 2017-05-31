<template>
<div class="box is-info">
	<h1>
		<slot></slot>
	</h1>
</div>
</template>

<!-- nest all data and behavious here -->
<script>
export default {}
</script>

<style lang="scss">
.box {
    background-color: #BADA55;
    padding: 20px;
		display: block;
		border: 1px solid blue;
		margin-bottom: 20px;

}
</style>
