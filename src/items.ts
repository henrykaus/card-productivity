export interface Item {
  name: string;
  numShards: number;
  weight: number;
  image: string;
}

export const ITEMS: Item[] = [
  {
    name: 'AirPods',
    numShards: 15,
    weight: 0.1,
    image: 'airpods.jpg'
  },
  {
    name: 'Pillow',
    numShards: 4,
    weight: 0.35,
    image: 'pillow.jpg'
  },
  {
    name: 'Shirt',
    numShards: 5,
    weight: 0.45,
    image: 'shirt.jpg'
  },
  {
    name: 'Computer',
    numShards: 30,
    weight: 0.1,
    image: 'computer.jpg'
  },
  {
    name: 'Headphones',
    numShards: 15,
    weight: 0.1,
    image: 'headphones.jpg'
   },
   {
    name: 'Sparkling Water',
    numShards: 1,
    weight: .2,
    image: 'water.jpg'
   }
]

