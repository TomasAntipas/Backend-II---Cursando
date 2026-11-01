export class Event {
    constructor({
        title,
        description,
        date,
        location,
        capacity,
        category
    }) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.capacity = capacity;
        this.category = category;
    }
}