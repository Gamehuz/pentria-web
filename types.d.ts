export interface Space {
  _id:              string;
  ac:               boolean;
  approved:         boolean;
  beds:             number;
  category:         string;
  cleaningSupplies: boolean;
  createdAt:        string;
  currency:         string;
  description:      string;
  facilityType:     string;
  image:            string[];
  kidFriendly:      boolean;
  kitchen:          boolean;
  location:         string;
  name:             string;
  parking:          boolean;
  outdoorSpace:     boolean;
  petFriendly:      boolean;
  policies:         string;
  pool:             boolean;
  price:            number;
  updatedAt:        string;
  videoGames:       boolean;
  wifi:             boolean;
  workspace:        boolean;
  reviews:          any[];
  author:           Author;
  activities:       Activity[];
}

export interface Activity {
  _id:      string;
  currency: string;
  duration: string;
  count?: number;
  date?: string;
  image:    string;
  name:     string;
  price:    number;
}

export interface ITicket {
  _id: string;
  spaceId: string;
  activityId: string;
  name: string;
  date: string;
  duration: string;
  count: number;
  price: number;
  total: number;
  startTime: string;
  endTime: string;
}


export interface Author {
  _id:         string;
  accountType: string;
  email:       string;
  phone:       string;
  firstName:   string;
  lastName:    string;
}

export interface CHECKOUT_TOTAL {
  initalAmount: number;
  discountPercentage: number;
  discountAmount: number;
  total: number;
}
