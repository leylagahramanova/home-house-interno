import work1 from '@/app/img/work1.png'
import work2 from '@/app/img/work2.png'
import work3 from '@/app/img/work3.png'
import work4 from '@/app/img/work4.png'
import icon1 from '@/app/img/icon1.png'
import icon2 from '@/app/img/icon2.png'
import icon3 from '@/app/img/icon3.png'
import icon4 from '@/app/img/icon4.png'
import num1 from '@/app/img/num1.png'
import num2 from '@/app/img/num2.png'
import num3 from '@/app/img/num3.png'
import num4 from '@/app/img/num4.png'
export type TypeWP = {
    id: number;
    title:string;
    description:string;
    image:string;
    icon:string;
    num:string;
};

export const work: TypeWP[] = [
    {
        id: 1,
      title:'Concept & Details',
      description:'It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
      image:work1.src,
      icon:icon1.src,
      num:num1.src,
    },
    {
        id: 2,
      title:'Concept & Details',
      description:'It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
      image:work2.src,
      icon:icon2.src,
      num:num2.src,
    },
   
    {
        id: 3,
      title:'Concept & Details',
      description:'It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
      image:work3.src,
      icon:icon3.src,
      num:num3.src,
    },
   
    {
        id: 4,
      title:'Concept & Details',
      description:'It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
      image:work4.src,
      icon:icon4.src,
      num:num4.src,
    },
   

];
