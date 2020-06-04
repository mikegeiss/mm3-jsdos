export class ElementZusatz {

  schaden: number;
  name: string;
  element: string;
  widerstand: number;

  constructor(name: string, schaden: number, widerstand: number, element: string) {
    this.name = name;
    this.schaden = schaden;
    this.element = element;
    this.widerstand = widerstand;
  }

}
