export async function fetchData(url){
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData
}
export async function getCountryDetails(url){
    let response = await fetch(url);
    let jsonData = await response.json();
    jsonData.countries.unshift({name: "Global", iso2: "GL", iso3: "GLO"})
    return jsonData
}

// Apis to be used
// https://covid19.mathdro.id/api/countries (done)
// https://disease.sh/v2/historical
// http://covid.gov.pk/datatable/stats/global

// https://disease.sh/v3/covid-19/historical/all?lastdays=30
// https://disease.sh/v3/covid-19/historical/Pakistan?lastdays=30
// https://disease.sh/v3/covid-19/jhucsse