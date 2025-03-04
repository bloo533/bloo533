export class Address {
    private name: string;
    private street: string;
    private city: string;
    private zip: string;
    private country: string;
    private mapUrl: string;

    constructor(name: string, street: string, zip: string, city: string, country: string, mapUrl: string) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.country = country;
        this.mapUrl = mapUrl;
    }

    getFullAddress() {
        return this.street + ', ' + this.city + ', ' + this.zip + ', ' + this.country;
    }

    getStreet() {
        return this.street;
    }

    getName() {
        return this.name
    }

    getCity() {
        return this.city;
    }

    getZip() {
        return this.zip;
    }

    getCountry() {
        return this.country;
    }

    getMapUrl() {
        return this.mapUrl;
    }

}

