import { ILink } from "../interfaces/ILink";
/**
 * Link is the object who contains the data about Stream.
 */
export class Link {
    private id: number;
    private name: string;
    private link: string;
    /**
     * Create new Link class
     * @param {object} data New link object of data
     * @example
     * const link = new Link({
     *  id: 0,
     *  name: "hello world",
     *  link: "https://youtube.com",
     * })
     */
    public constructor(data: ILink) {
        this.id = data.id;
        this.name = data.name;
        this.link = data.link;
    }
    /**
     * Returns all parametrs in object Link.
     * @returns {object} Return the object of Link
     * @example
     * Link.getData();
     * //  returns {
     * //  id: 0,
     * //  name: "some name",
     * //  link: "some link",
     * // }
     */
    get getData(): ILink {
        return {
            id: this.id,
            name: this.name,
            link: this.link,
        }
    }
    /**
     * Set new name for Link.
     * @param {string} item New name.
     * @example
     * Link.setName("YouTube");
     * @example
     * Link.setName("Rutube");
     */
    set setName(item: string) {
        this.name = item;
    }
    /**
     * Set new link for Link.
     * @param {string} item New link.
     * @example
     * Link.setLink("https://youtube.com");
     */
    set setLink(item: string) {
        this.link = item;
    }
}