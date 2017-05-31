import styled from 'vue-styled-components';
<template >
<div>
	<h2>the count is {{ count }}</h2>
	<p><button type="button" name="button" @click="count +=1">increment</button></p>
</div>
</template>

<script>
export default {
	data() {
		return {
			count:0
		}
	}
}
</script>

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
