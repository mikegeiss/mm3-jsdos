export class ItemBonus {

  constructor(public name: string, public value: number, public typ: string) {
  }

  public toString(): string {
    return "+" + this.value + " " + this.typ;
  }
}
