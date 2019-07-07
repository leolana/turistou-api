export interface TimestampEntity {
  createdAt: Date;
  updatedAt: Date;
}

export default interface Entity extends TimestampEntity {
  id: String;
}
