<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  
  import Forecast from "./routes/Forecast.svelte";
  import Home from "./routes/Home.svelte";
</script>

<section class="component-app">
	<div class="columns is-centered is-mobile">
		<div class="column is-8-desktop is-11-mobile">
			<Router>
				<div class="columns">
					<div class="column">
						<nav class="container-nav">
							<Link to="/">Hoje</Link> <span class="has-text-white">/</span> 
							<Link to="previsao">Previsão</Link>
							<!-- <Link to="blog">Blog</Link> -->
						</nav>
					</div>
				</div>				
				<div>
					<!-- <Route path="blog/:id" component="{BlogPost}" />
					<Route path="blog" component="{Blog}" /> -->
					<Route path="previsao" component="{ Forecast }" /> 
					<Route path="/"><Home /></Route>
				</div>
			</Router>
		</div>
	</div>	
</section>