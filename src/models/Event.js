class Event {
    constructor({
    id = crypto.randomUUID(),
    title,
    description,
    date,
    location,
    capacity,
    category,
    }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.location = location;
    this.capacity = capacity;
    this.category = category;
    }
}

export default Event;