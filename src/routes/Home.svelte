<script>
    import { onMount } from 'svelte';

    let date, data, text;

    onMount(() => {
        const key = '554e9dc1d2e3e0ff2fedbe769b0a9288',
        ID = 3449701;

        date = moment().format("L");
        
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + ID + '&appid=' + key + '&units=metric&lang=pt')
        .then($result => { return $result.json() })
        .then($data => { 
            data = $data;            
            const desc = $data.weather[0].description;
            text = desc.substr(0,1).toUpperCase() + desc.substr(1, desc.length);
        })
        .catch($error => { console.log("$error :: " + $error) });
    })

</script>

<section class="component-home">
    <div class="columns">
        <div class="column">           
            { #if !data } <p class="is-size-3 has-text-white has-text-centered"> Carregando... </p> { /if }
            { #if data }
                <article class="message">
                    <div class="message-header"><p> Santo André ~ { date } </p></div>
                    <div class="message-body has-text-centered has-text-white">                    
                        <div class="columns">
                            <div class="column">
                                <p class="is-size-5"> { text } </p>
                            </div>
                        </div>
                        <hr>
                        <div class="columns">
                            <div class="column">
                                <p> Min </p>
                                <p> <span class="is-size-3 has-text-weight-bold"> { data.main.temp_min } </span> C°</p>
                            </div>
                            <div class="column">
                                <p> Atual </p>
                                <p> <span class="is-size-3 has-text-weight-bold"> { data.main.temp } </span> C°</p>
                            </div>
                            <div class="column">
                                <p> Max </p>
                                <p> <span class="is-size-3 has-text-weight-bold"> { data.main.temp_max } </span> C°</p>
                            </div>
                        </div>                    
                    </div>
                </article>
            { /if }
        </div>
    </div>

</section>
