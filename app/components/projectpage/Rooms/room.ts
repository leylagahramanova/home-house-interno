import roomp1 from '@/app/img/roomp1.png'
import roomp2 from '@/app/img/roomp2.png'
import roomp3 from '@/app/img/roomp3.png'
import roomp4 from '@/app/img/roomp4.png'
import roomp5 from '@/app/img/roomp5.png'
import roomp6 from '@/app/img/roomp6.png'
import roomp7 from '@/app/img/roomp7.png'
export type TypeRoom = {
    id: number;
    room: string;
    title: string;
    category: string;
    client:string;
    tags: string;
    date:string;
    link:string;
    detail:string;
};

export type TypeCategory = {
    id: number;
    category: string;
    rooms: TypeRoom[];
};

export const categories: TypeCategory[] = [
    {
        id: 1,
        category: 'Every room Answered',
        rooms: [
            {
                id: 1,
                room:roomp1.src,
              title:'Minimal Bedroom',
                category: 'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                id: 2,
                room:roomp2.src,
               title:'Minimal Bedroom',
                category:'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                id: 3,
                room:roomp3.src,
              title:'Minimal Bedroom',
                category:'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                id: 4,
                room:roomp4.src,
               title:'Minimal Bedroom',
                category:'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                id: 5,
                room:roomp5.src,
                title:'Minimal Bedroom',
                category:'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                id: 6,
                room:roomp6.src,
               title:'Minimal Bedroom',
                category:'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            },
            {
                id: 7,
                room:roomp7.src,
                title:'Minimal Bedroom',
                category:'Decor / Artchitecture',
                client:"Your client name",
                
                tags: 'Interior, Home',
                date:'Date 23,02, 2022',
                link:'https://example.com',
                detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            }
        ],
    },

    // {
    //     id: 2,
    //     category: 'Project related rooms',
    //     rooms: [
    //         {
    //             id: 1,
    //             room:roomp1.src,
    //              title:'Minimal Bedroom',
    //             category: 'open',
    //         },
    //         {
    //             id: 2,
    //             room:roomp1.src,
    //             title:'Minimal Bedroom',
    //             category:'Decor / Artchitecture',
    //         },
    //         {
    //             id: 3,
    //             room:roomp1.src,
    //             title:'Minimal Bedroom',
    //             category:'Decor / Artchitecture',
    //         },
    //         {
    //             id: 4,
    //             room:roomp1.src,
    //              title:'Minimal Bedroom',
    //             category:'Decor / Artchitecture',
    //         },
    //         {
    //             id: 5,
    //             room:roomp1.src,
    //              title:'Minimal Bedroom',
    //             category:'Decor / Artchitecture',
    //         }
            
    //     ],

    // },
];