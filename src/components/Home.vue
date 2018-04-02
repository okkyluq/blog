<template>
    <div class="home">
	<my-nav></my-nav>

	<div class="container">
  		<div class="row">
        	<div class="col-md-8">
				<h1 class="my-4">Page Heading
					<small>Secondary Text</small>
				</h1>
				
				<my-articles></my-articles>
				<my-pagination></my-pagination>

        	</div>

	        <div class="col-md-4">
				<my-sidebar></my-sidebar>
			</div>

      	</div>
    </div>

 	<my-footer></my-footer>

    </div>
</template>

<script>
import Nav from './partials/Nav.vue'
import Footer from './partials/Footer.vue'
import Sidebar from './partials/Sidebar.vue'
import Articles from './partials/ArticlesList.vue'
import Pagination from './partials/Pagination.vue'

export default {
	components:{
		'my-nav' : Nav,
		'my-footer' : Footer,
		'my-sidebar' : Sidebar,
		'my-articles' : Articles,
		'my-pagination' : Pagination
	}
}
</script>

<style>
body {
  padding-top: 54px;
}

@media (min-width: 992px) {
  	body {
    	padding-top: 56px;
  	}
}

</style>