export class AsyncRequests {
  constructor() {
    this.baseURL = "https://gateway.marvel.com:443/v1/public/";
  }

  async getOneChar(id) {
    if (!id) throw new Error("Attribute id is required");
    const url = `${this.baseURL}characters/${id}?apikey=e43f19f4472459ad11df2d6d89eaef55`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getAllChars(offset = 210, limit = 6) {
    const url = `${this.baseURL}characters?limit=${limit}&offset=${offset}&apikey=e43f19f4472459ad11df2d6d89eaef55`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getAllComics(offset = 210, limit = 6) {
    const url = `https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset}&apikey=e43f19f4472459ad11df2d6d89eaef55`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getOneComic(id) {
    const url = `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=e43f19f4472459ad11df2d6d89eaef55`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
