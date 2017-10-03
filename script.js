var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#country-name-form').submit(searchCountries);

function searchCountries(event) {
    event.preventDefault();
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
        error: function(xhr, status, error) {
            alert("You provided wrong url. Try again.")
        }
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        var flag = $('<img>').attr("src", item.flag);
        var countryInfo = $('<li class="country-information">').append(flag)
        countryInfo.text(item.name + " - " + item.capital + " - " + item.languages["0"].name).prepend(flag).appendTo(countriesList);
    });

    $('#countries li').hide().slice(0,5).show();

    $("li").each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', '#000000');
        }
        else {
            $(element).css('color', '#483d8b');
        }
    });
}




