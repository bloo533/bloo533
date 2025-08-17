export class TitleBar {
    private title: string;
    
    constructor(title: string) {
        this.title = title;
    }
    
    getTitle(): string {
        return this.title;
    }
}