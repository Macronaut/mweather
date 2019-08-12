<script>
    import { onMount } from 'svelte';

    let weather;

    onMount(() => {
        const key = '554e9dc1d2e3e0ff2fedbe769b0a9288',
        ID = 3449701;

        /* date = moment().format("L"); */
        
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + ID + '&appid=' + key + '&units=metric&cnt=10')
        .then($result => { return $result.json() })
        .then($data => {            
            weather = [];
            $data.list.forEach($item => {
                weather.push({
                    date: moment($item.dt_txt).format("LLL"),
                    main: $item.main
                })
            })
        })
        .catch($error => { console.log("$error :: " + $error) });
    })

</script>

<section class="component-forecast">
    <p class="is-size-4 has-text-white">São Paulo</p>
    <hr>
    { #if weather }
        {#each weather as forecast}
            <div class="columns is-centered is-mobile">
                <div class="column is-7-desktop is-11-mobile">
                    <div class="box">
                        <div class="columns">
                            <div class="column has-text-white">
                                <p> { forecast.date } </p>
                                <hr>
                                <div class="columns is-vcentered">
                                    <div class="column is-6">
                                        <p> Atual </p>
                                        <p> <span class="has-text-weight-bold"> { forecast.main.temp } </span> C° </p>
                                    </div>
                                    <div class="column is-6">
                                        <p> Min <span class="has-text-weight-bold"> { forecast.main.temp_min } </span> C° </p>
                                        <p> Max <span class="has-text-weight-bold"> { forecast.main.temp_max } </span> C° </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    { /if }
</section>
