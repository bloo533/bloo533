export class TeamMember {

    private firstname: string;
    private lastname: string;
    private role: string;
    private photoUrl: string;
    private certifications: string[];
    private palmares: string[];

    constructor(firstname: string, lastname: string, role: string, photoUrl: string, certifications: string[], palmares: string[]) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.role = role;
        this.photoUrl = photoUrl;
        this.certifications = certifications;
        this.palmares = palmares;
    }

    getFirstname(): string {
        return this.firstname;
    }

    getLastname(): string {
        return this.lastname;
    }

    getFullname(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    getRole(): string {
        return this.role;
    }

    getPhotoUrl(): string {
        return this.photoUrl;
    }

    getCertifications(): string[] {
        return this.certifications;
    }

    getPalmares(): string[] {
        return this.palmares;
    }
}
