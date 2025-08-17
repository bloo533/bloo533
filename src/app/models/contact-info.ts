import { Address } from "./address";

export class ContactInfo {
    private address !: Address;
    private phone !: string;
    private email !: string;
    private facebookPage !: string;

    constructor (address: Address, phone: string, email: string, facebookPage: string) {
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.facebookPage = facebookPage;
    }

    getAddress(): Address {
        return this.address;
    }

    getPhone(): string {
        return this.phone;
    }

    getEmail(): string {
        return this.email;
    }

    getFacebookPage(): string {
        return this.facebookPage;
    }
}