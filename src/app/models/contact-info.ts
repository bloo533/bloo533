import { Address } from "./address";

export class ContactInfo {
    private address !: Address;
    private phone !: string;
    private email !: string;

    constructor (address: Address, phone: string, email: string) {
        this.address = address;
        this.phone = phone;
        this.email = email;
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
}