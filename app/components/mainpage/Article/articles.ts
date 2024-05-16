import news1 from '@/app/img/news1.png'
import news2 from '@/app/img/news2.png'
import news3 from '@/app/img/news3.png'
export type TypeNews = {
    id: number;
    date: string;
    title:string;
    image:string;
};

export const news: TypeNews[] = [
    {
        id: 1,
        date: '26 December,2022 ',
        title:'Let’s Get Solution For Building Construction Work',
   image:news1.src
    },
    {
        id: 2,
        date: '26 December,2022 ',
        title:'Low Cost Latest Invented Interior Designing Ideas',
       image:news2.src
        
    },
    {
        id: 3,
        date: '26 December,2022 ',
        title:'Best For Any Office & Business Interior Solution',
        image:news3.src
        
    },

];
