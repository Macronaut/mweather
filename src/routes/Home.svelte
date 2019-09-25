<script>
    import getWeatherIcon from '../helpers/getWeatherIcon.js';
    import { onMount } from 'svelte';

    let weather, date, data, text, src;

    onMount(() => {
        const key = '554e9dc1d2e3e0ff2fedbe769b0a9288',
        ID = 3449701;

        date = moment().format("L");

        fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/45882?apikey=cbG1GEvR8LtCMgE8eY0nHUr9exdtQjaw&language=pt-br')
        .then($result => { debugger })
        .then($result => { debugger })
        .catch(error => console.log(`Erro ${error}`))
        
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + ID + '&appid=' + key + '&units=metric&lang=pt')
        .then($result => { return $result.json() })
        .then($data => {
            data = $data;
            const id = $data.weather[0].id;
            src = getWeatherIcon(id);
            const desc = $data.weather[0].description;
            text = desc.substr(0,1).toUpperCase() + desc.substr(1, desc.length);
        })
        .catch($error => { console.log("$error :: " + $error) });

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
    .component-home .img {
        width: 128px;
        height: auto;
    }
    
    .component-home .has-padding {
        box-sizing: border-box;
        padding: 0 20px;
    }
</style>

<section class="component-home">    
    <div class="columns">
        <div class="column">           
            { #if !data } <p class="is-size-4 has-text-centered has-text-white"> -- carregando -- </p> { /if }
            { #if data }
                <p class="is-size-5 has-text-white"> { date } </p>
                <p class="is-size-4 has-text-white">Santo André, SP</p>                
                <div class="columns has-text-centered has-text-white">
                    <div class="column">
                        { #if src }                                
                            <img class="img" src={ src } alt="Ícone" >
                            <p> { text } </p>
                        { /if }                            
                        <p class="is-size-2"> <span class="has-text-weight-bold"> { data.main.temp } </span> C°</p>
                    </div>
                </div>
                { #if weather }
                    <div class="columns has-background-white">
                        <div class="column">
                            { #each weather as forecast }
                                <div class="columns has-padding is-mobile is-vcentered">
                                    <div class="column is-6">
                                        <p> { forecast.date } </p>
                                    </div>
                                    <div class="column is-6 has-text-right">
                                        <p class="is-size-4"><span class="has-text-weight-bold"> { forecast.main.temp } </span> C° </p>
                                        <p class="has-text-grey"> { forecast.description } </p>
                                    </div>
                                </div>
                            { /each }
                        </div>
                    </div>
                { /if }
                <!-- <div class="columns has-text-centered has-text-white">
                    <div class="column is-6">
                        <p class="is-size-4 is-size-3-mobile">Min</p>
                        <p class="is-size-3 is-size-2-mobile"> <span class="has-text-weight-bold"> { data.main.temp_min } </span> C°</p>
                    </div>
                    <div class="column is-6">
                        <p class="is-size-4 is-size-3-mobile">Max</p>
                        <p class="is-size-3 is-size-2-mobile"> <span class="has-text-weight-bold"> { data.main.temp_max } </span> C°</p>
                    </div>
                </div> -->                
            { /if }
        </div>
    </div>    
</section>
