export class Course {
    private title !: string;
    private pictureUrl !: string;
    private content !: string[];
    private timeslot !: string;

    constructor (title: string, content: string[], pictureUrl: string, timeslot: string) {
        this.title = title;
        this.pictureUrl = pictureUrl;
        this.content = content;
        this.timeslot = timeslot;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string[] {  
        return this.content;
    }

    getPicutreUrl(): string {
        return this.pictureUrl;
    }

    getTimeslot(): string {
        return this.timeslot;
    }
}