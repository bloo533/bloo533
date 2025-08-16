export class NewsArticle {
    private title !: string;
    private pictureUrl !: string;
    private content !: string;

    constructor (title: string, content: string, pictureUrl: string) {
        this.title = title;
        this.pictureUrl = pictureUrl;
        this.content = content;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {  
        return this.content;
    }

    getPictureUrl(): string {
        return this.pictureUrl;
    }
}