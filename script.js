

class Brewery {
    constructor(name, brewery_type, street, city, country, phone) {
      this.name = name;
      this.brewery_type = brewery_type;
      this.street = street;
      this.city = city;
      this.country = country;
      this.phone = phone;
    }
  }
  
  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then(response => response.json())
      .then(data => {
        const breweryList = document.getElementById("brewery-list");
        data.forEach(item => {
          const brewery = new Brewery(
            item.name,
            item.brewery_type,
            item.street,
            item.city,
            item.country,
            item.phone
          );
          const row = document.createElement("tr");
          row.innerHTML = `<td>${brewery.name}</td>
                          <td>${brewery.brewery_type}</td>
                          <td>${brewery.street}</td>
                          <td>${brewery.city}</td>
                          <td>${brewery.country}</td>
                          <td>${brewery.phone}</td>`;
          breweryList.appendChild(row);
        });
      })
      .catch(error => console.log(error));
  };
  
  getBreweries();
  