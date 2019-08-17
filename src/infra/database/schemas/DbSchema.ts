import { Schema } from 'mongoose';

export type DbSchema = { schema: Schema, collectionName: string };

export const CITY_COLLECTION_NAME = 'City';
export const COMPANY_TYPE_COLLECTION_NAME = 'CompanyType';
export const CUSTOMER_COLLECTION_NAME = 'Customer';
export const EXCURSION_COLLECTION_NAME = 'Excursion';
export const OCCUPATION_TYPE_COLLECTION_NAME = 'OccupationType';
export const ORGANIZATION_COLLECTION_NAME = 'Organization';
export const PASSENGER_COLLECTION_NAME = 'Passenger';
export const STATE_COLLECTION_NAME = 'State';
export const TICKET_PRICE_COLLECTION_NAME = 'TicketPrice';
export const TRANSPORT_COLLECTION_NAME = 'Transport';
export const USER_COLLECTION_NAME = 'User';
