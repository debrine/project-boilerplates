export class Repository {
  apiPrefix: string;
  constructor() {
    this.apiPrefix = 'item';
  }

  async getItemById(id: string) {}

  async getAllItems() {}

  async updateItemById(id: string, updatedItem: any) {}
}
