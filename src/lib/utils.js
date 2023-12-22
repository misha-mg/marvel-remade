// export class AsyncRequests {
//   constructor() {
//     this.baseURL = "https://gateway.marvel.com:443/v1/public/";
//     this.baseKeys = "apikey=e43f19f4472459ad11df2d6d89eaef55";
//   }

//   async getOneChar(id) {
//     if (!id) throw new Error("Attribute id is required");
//     const url = `${this.baseURL}characters/${id}?${this.baseKeys}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//   async getAllChars(offset = 210, limit = 6) {
//     const url = `${this.baseURL}characters?limit=${limit}&offset=${offset}&${this.baseKeys}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//   async getAllComics(offset = 210, limit = 6) {
//     const url = `${this.baseURL}comics?limit=8&offset=${offset}&${this.baseKeys}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//   async getOneComic(id) {
//     const url = `${this.baseURL}comics/${id}?${this.baseKeys}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
// }

export class AsyncRequest {
  constructor(options) {
    this.baseURL = "https://gateway.marvel.com:443/v1/public/";
    this.baseKey = "apikey=e43f19f4472459ad11df2d6d89eaef55";
    this.method = options.method;
    this.data = options.data;
  }

  async getSingleData() {
    const url = `${this.baseURL}${this.method}/${this.data.id}?${this.baseKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getNumerousData() {
    const url = `${this.baseURL}${this.method}?limit=${this.data.limit}&offset=${this.data.offset}&${this.baseKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
