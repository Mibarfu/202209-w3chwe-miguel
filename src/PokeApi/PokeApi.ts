class PokeApi {
  constructor(
    private readonly apiUrl: string,
    private readonly apiEndPoint: string
  ) {}

  async request(id: number) {
    try {
      const response = await fetch(`${this.apiUrl}/${this.apiEndPoint}/${id}`);
      return (await response.json()) as Response;
    } catch (e: unknown) {}
  }
}

export default PokeApi;
