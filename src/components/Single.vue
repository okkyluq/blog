<template>
	<div class="single">
		<my-nav></my-nav>


		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<br><br><br>	
					<h1 class="mt-4">{{ article.title }}</h1>
					<p class="lead">by<a href="#"> Start Bootstrap</a></p>
					<p>Posted on January 1, 2018 at 12:00 PM</p>
					<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">
					<hr>
					<p>{{ article.body }}</p>
					<hr>

					<!-- Comments Form -->
					<div class="card my-4">
						<h5 class="card-header">Leave a Comment:</h5>
						<div class="card-body">
							<form>
								<div class="form-group">
									<textarea class="form-control" rows="3"></textarea>
								</div>
								<button type="submit" class="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>


				</div>

				<div class="col-md-4">
					<br><br><br>
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
import axios from 'axios'
export default {
	components:{
		'my-nav' : Nav,
		'my-footer' : Footer,
		'my-sidebar' : Sidebar,
		'my-articles' : Articles,
		'my-pagination' : Pagination
	},
	data(){
		return{
			article:[]
		}
	},
	mounted(){
		this.getArticle(this.$route.params.id)
	},
	methods: {
		getArticle:function(id){
			axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
			.then((response) => {
				this.article = response.data
				console.log(this.article)

			})
			.catch((error) => {
				console.log(error)
			});
		}
	}
}
</script>

<style lang="css" scoped>
</style>