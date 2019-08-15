<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  
  import Forecast from "./routes/Forecast.svelte";
  import Home from "./routes/Home.svelte";
</script>

<section class="component-app">
	<div class="columns is-centered is-mobile">
		<div class="column has-background-primary is-8-desktop is-10-tablet is-12-mobile">
			<Router>
				<!-- <div class="columns">
					<div class="column">
						<nav class="container-nav">
							<Link to="/"><span class="has-text-weight-bold">Hoje</span></Link> 
							<span class="has-text-white">/</span>
							<Link to="previsao"><span class="has-text-weight-bold">Próximas Horas</span></Link>							
						</nav>
						<p class="has-text-white">Clique em um dos links acima para alternar entre o tempo hoje e nas próximas horas.</p>
					</div>
				</div> -->
				<div class="columns has-background-grey-dark">
					<div class="column">
						<p class="has-text-white is-size-5"><span class="has-text-weight-bold has-text-danger">M</span>Weather</p>
					</div>
				</div>
				<div class="columns">
					<div class="column">						
						<Route path="previsao" component="{ Forecast }" /> 
						<Route path="/"><Home /></Route>
					</div>
				</div>
			</Router>
			<div class="columns">
				<div class="column has-background-grey-dark">
					<div class="has-text-white has-text-centered">Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
				</div>
			</div>
		</div>
	</div>	
</section>