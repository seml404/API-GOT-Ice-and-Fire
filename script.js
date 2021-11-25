class GotService {
  async getResourse(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`this is custom error text, status ${res.status}`);
    }
    return await res.json();
  }

  getAllCharacters() {
    return this.getResourse(
      "https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10"
    );
  }
}

const got = new GotService();

got.getAllCharacters().then((res) => console.log(res));
