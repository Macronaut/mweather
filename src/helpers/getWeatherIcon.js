export default $param_id => {
    const path = "http://mweather.seektech.com.br/assets/";
    let src;
    
    if($param_id >= 200 && $param_id <= 232) { // Trovoada
        src = path + "023-storm.png";
    } else if ($param_id >= 300 && $param_id <= 321) { // Chuvisco
        src = path + "017-rain.png";
    } else if ($param_id >= 500 && $param_id <= 531) { // Chuva
        src = path + "017-rain.png";
    } else if ($param_id >= 600 && $param_id <= 622) { // Neve
        src = path + "018-snowflake.png";
    } else if ($param_id == 800) { // Limpo
        src = path + "013-sun.png";
    } else if ($param_id >= 801 && $param_id <= 804) { // Nublado
        src = path + "049-cloudy.png";
    }
    return src;
}