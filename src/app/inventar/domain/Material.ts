export class Material {

  constructor(public name: string, public toHit: number, public physischerSchaden: number, public ruestungsklasse: number, public preis: string) {
  }

  public toString(): string {
    return this.name;
  }
}