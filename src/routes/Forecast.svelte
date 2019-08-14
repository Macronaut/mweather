<script>
    import getWeatherIcon from '../helpers/getWeatherIcon.js';
    import { onMount } from 'svelte';

    let weather;

    onMount(() => {
        const key = '554e9dc1d2e3e0ff2fedbe769b0a9288',
        ID = 3449701;        
        
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + ID + '&appid=' + key + '&units=metric&cnt=21&lang=pt')
        .then($result => { return $result.json() })
        .then($data => {
            weather = [];
            $data.list.forEach($item => {                
                const desc = $item.weather[0].description,
                img = getWeatherIcon($item.weather[0].id),
                text = desc.substr(0,1).toUpperCase() + desc.substr(1, desc.length);
                weather.push({
                    date: moment($item.dt_txt).format("LLL"),
                    description: text,
                    main: $item.main,
                    src: img 
                })
            })
        })
        .catch($error => { console.log("$error :: " + $error) });
    })

</script>

<style>
    .component-forecast .img {
        height: auto;
        width: 128px;
    }
</style>

<section class="component-forecast">
    <hr>
    <p class="is-size-4 has-text-white">Santo André</p>
    <hr>
    { #if !weather } <p class="is-size-3 has-text-white has-text-centered"> Carregando... </p> { /if }
    { #if weather }
            <div class="columns is-multiline is-centered is-mobile">
                {#each weather as forecast}
                    <div class="column is-4-desktop is-6-tablet is-11-mobile">
                        <div class="box has-text-white">
                            <div class="columns">
                                <div class="column">
                                    <p> { forecast.date } </p>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column has-text-centered">
                                    <img class="img" src={ forecast.src } alt="Ícone" >
                                    <p> { forecast.description } </p>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <p class="has-text-centered is-size-3"> <span class="has-text-weight-bold"> { forecast.main.temp } </span> C°</p>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <p> Min <span class="has-text-weight-bold"> { forecast.main.temp_min } </span> C° </p>
                                    <p> Max <span class="has-text-weight-bold"> { forecast.main.temp_max } </span> C° </p>
                                </div>
                            </div>
                        </div>                        
                        <!-- <article class="message">
                            <div class="message-header">
                                <p> { forecast.date } </p>
                            </div>
                            <div class="message-body has-text-centered has-text-white">
                                <div class="columns">
                                    <div class="column">
                                        <p> <span class="is-size-3 has-text-weight-bold"> { forecast.main.temp } </span> C°</p>
                                    </div>
                                </div>
                                <div class="columns">
                                    <div class="column">
                                        <p> Mínima: <span class="has-text-weight-bold"> { forecast.main.temp_min } </span> C°</p>
                                        <p> Máxima: <span class="has-text-weight-bold"> { forecast.main.temp_max } </span> C°</p>
                                        <hr>
                                        <p class="is-size-5"> { forecast.description } </p>
                                    </div>                                    
                                </div>
                            </div>
                        </article> -->
                    </div>
                {/each}
            </div>
    { /if }
</section>
