export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate?: number;
  baggage: string;
}
