<script>
    import { onMount } from 'svelte';

    let date, weather;

    onMount(() => {
        const key = '554e9dc1d2e3e0ff2fedbe769b0a9288',
        ID = 3449701;

        date = moment().format("L");
        
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + ID + '&appid=' + key + '&units=metric')
        .then($result => { return $result.json() })
        .then($data => { weather = $data.main })
        .catch($error => { console.log("$error :: " + $error) });
    })

</script>

<section class="component-home">
    <div class="columns">
        <div class="column">
            <div class="box">
                { #if date } <p class="has-text-white is-size-5"> Clima ~ { date } </p> { /if }
                <p class="has-text-white is-size-4">São Paulo</p>
                { #if weather }
                    <hr>
                    <div class="columns is-vcentered has-text-white has-text-centered">                    
                        <div class="column is-6">
                            <p class="is-size-3">Atual</p>
                            <p class="is-size-2"> <span class="has-text-weight-bold"> { weather.temp } </span> C° </p>
                        </div>
                        <div class="column is-6">
                            <div class="columns">
                                <div class="column">
                                    <p class="is-size-3">Min</p>
                                    <p class="is-size-2"> <span class="has-text-weight-bold"> { weather.temp_min } </span> C°</p>
                                </div>                                
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <p class="is-size-3">Max</p>
                                    <p class="is-size-2"> <span class="has-text-weight-bold"> { weather.temp_max } </span> C° </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                { /if }
            </div>
        </div>
    </div>

</section>
