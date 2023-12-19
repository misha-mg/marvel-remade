export class AsyncRequests {
  constructor() {
    this.baseURL = "https://gateway.marvel.com:443/v1/public/";
    this.baseKeys = "apikey=e43f19f4472459ad11df2d6d89eaef55";
  }

  async getOneChar(id) {
    if (!id) throw new Error("Attribute id is required");
    const url = `${this.baseURL}characters/${id}?${this.baseKeys}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getAllChars(offset = 210, limit = 6) {
    const url = `${this.baseURL}characters?limit=${limit}&offset=${offset}&${this.baseKeys}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getAllComics(offset = 210, limit = 6) {
    const url = `${this.baseURL}comics?limit=8&offset=${offset}&${this.baseKeys}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getOneComic(id) {
    const url = `${this.baseURL}comics/${id}?${this.baseKeys}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
