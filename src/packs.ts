export interface Pack {
  name: string;
  cost: number;
  image: string;
  items: string[];
}

export const PACKS: Pack[] = [
  {
    name: 'Basic',
    cost: 60,
    image: 'card2.png',
    items: [
      'AirPods',
      'Pillow',
      'Sparkling Water'
    ]
  },
  {
    name: 'Special',
    cost: 100,
    image: 'card2.png',
    items: [
      'Shirt',
      'Computer',
      'Headphones',
      'Sparkling Water'
    ]
  }
]
