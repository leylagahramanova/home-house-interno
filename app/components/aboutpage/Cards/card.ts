import charlotte from '@/app/img/charlotte.png'
import nattasha from "@/app/img/nattasha.png"
import averyj from "@/app/img/averyj.png"
import nora from "@/app/img/nora.png"
export type TypeCard={
    id: number;
    name:string;
    image:string;
    phone:string;
    mail:string;
    prof:string;
    country:string;
}
export const cards: TypeCard[] = [
{
id:1,
name:'Nattasha Julie',
prof: ' Design',
country:'Australia',
phone:'+1 (378) 400-1234',
mail:'julie@email.com',
image:charlotte.src,
},
{id:2,
    name:'Nattasha Julie',
    prof: ' Design',
    country:'Australia',
    phone:'+1 (378) 400-1234',
    mail:'julie@email.com',
    image:nattasha.src,
},
    {id:3,
        name:'Nattasha Julie',
        prof: ' Design',
        country:'Australia',
        phone:'+1 (378) 400-1234',
        mail:'julie@email.com',
        image:averyj.src,
    },
    {id:4,
        name:'Nattasha Julie',
        prof: ' Design',
        country:'Australia',
        phone:'+1 (378) 400-1234',
        mail:'julie@email.com',
        image:nora.src,
    }
]