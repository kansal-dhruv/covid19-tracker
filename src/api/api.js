const link="https://covid19.mathdro.id/api";
const link_co="https://covid19.mathdro.id/api/daily";
export async function fetchData(){
    let response = await fetch(link);
    let data = await response.json();
    let response_co = await fetch(link_co);
    let data_co = await response_co.json(); 
    const conf_inc=data_co[data_co.length-1].confirmed.total;
    const death_inc=data_co[data_co.length-1].deaths.total;
    // console.log(data);
    console.log(data_co);
    data={...data,increase_confirmed:data.confirmed.value - conf_inc,increase_deaths:data.deaths.value-death_inc};
    return data;
}
