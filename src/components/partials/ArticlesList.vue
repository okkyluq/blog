<template>
	<div >
		<div class="card mb-4" v-for="article in articles.slice(0, 100)">
			<img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
			<div class="card-body">
				<h2 class="card-title">{{ article.title }}</h2>
				<p class="card-text">{{ article.body }}</p>
				<!-- <a :href="/single/ + article.id" class="btn btn-primary">Read More &rarr;</a> -->
				<a :href="/single/ + article.id" class="btn btn-primary" @click.prevent="loadArticles(article.id)">Read More &rarr;</a>
			</div>
			<div class="card-footer text-muted">
				Posted on January 1, 2017 by
				<a href="#">Start Bootstrap</a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			articles:'',
		}
	},
	mounted(){
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then((response) => {
			this.articles = response.data
		})
		.catch((error) => {
			console.log(error)
		});
	},
	methods: {
		loadArticles: function(id){
			this.$router.push({name: 'Single', params : {id :id }})
		}
	}

}
</script>
