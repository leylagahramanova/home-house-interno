import blonde from '@/app/img/blonde.png'
import brown from '@/app/img/brown.png'
import black from '@/app/img/black.png'
export type TypeComment = {
    id: number;
    name: string;
    place:string;
    description: string;
    image:string;
};

export const comments: TypeComment[] = [
    {
        id: 1,
        name: 'Nattasha Mith',
        place:'Sydney, USA',
        description: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.',
   image:blonde.src
    },
    {
        id: 2,
        name: 'Raymond Galario',
        place:'Sydney, Australia',
        description: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
        image:brown.src
        
    },
    {
        id: 3,
        name: 'Benny Roll',
        place:'Sydney, New York',
        description: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.',
        image:black.src
        
    }
];
