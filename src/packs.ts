export interface Pack {
  name: string;
  cost: number;
  image: string;
  cardBackImage: string;
  items: string[];
}

export const PACKS: Pack[] = [
  {
    name: 'Basic',
    cost: 60,
    image: 'pack2.png',
    cardBackImage: 'card-back1.jpg',
    items: [
      'AirPods',
      'Pillow',
      'Sparkling Water',
    ],
  },
  {
    name: 'Special',
    cost: 100,
    image: 'pack1.png',
    cardBackImage: 'card-back2.jpg',
    items: [
      'Shirt',
      'Computer',
      'Headphones',
      'Sparkling Water',
    ],
  }
]
