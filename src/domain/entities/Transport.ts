export interface ITransport {
  type: String;
  plate: String;
  capacity: Number;
  driver: String;
}

export default class Transport implements ITransport {
  type: String;
  plate: String;
  capacity: Number;
  driver: String;
}
