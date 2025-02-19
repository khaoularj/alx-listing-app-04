export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit';
}

export interface Address {
  city: string;
  country: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  rating: number;
  address: Address;
  description: string;
  category: string[];
  image: string;
  price: number;
  reviews?: ReviewProps[];
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}
