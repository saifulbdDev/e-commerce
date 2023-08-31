export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface GeoLocation {
  lat: string;
  long: string;
}

export interface Address {
  geolocation: GeoLocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}



export interface Name {
  firstname: string;
  lastname: string;
}



export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}



export interface ProductState {
  product: {
    carts:any[]
    userId: string;
  };
}
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string;
}

