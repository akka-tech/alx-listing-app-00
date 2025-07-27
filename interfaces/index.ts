interface cardProps {

}

interface buttonProps {

    
}

interface PropertyProps {
    
    name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[]; // list of tags like "Luxury Villa", etc.
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}