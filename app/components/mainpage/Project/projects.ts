import room1 from '@/app/img/room1.png'
import room2 from '@/app/img/room2.png'
import room3 from '@/app/img/room3.png'
import room4 from '@/app/img/room4.png'
export type TypeRoom = {
    id: number;
    name: string;
    category:string;
    image:string;
};

export const rooms: TypeRoom[] = [
    {
        id: 1,
        name: 'Modern Kitchan',
        category:'Decor / Artchitecture',
   image:room1.src
    },
    {
        id: 2,
        name: 'Modern Kitchan',
        category:'Decor / Artchitecture',
       image:room2.src
        
    },
    {
        id: 3,
        name: 'Modern Kitchan',
        category:'Decor / Artchitecture',
        image:room3.src
        
    },
    {
        id: 4,
        name: 'Modern Kitchan',
        category:'Decor / Artchitecture',
       image:room4.src
        
    }
];
