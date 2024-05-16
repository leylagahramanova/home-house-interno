//app/component/profpage/Profs/profs.ts
import charlotte from '@/app/img/charlotte.png'
import nattasha from "@/app/img/nattasha.png"
import averyj from "@/app/img/averyj.png"
import nora from "@/app/img/nora.png"
import john from '@/app/img/john.png'
import sofia from '@/app/img/sofia.png'
import luna from '@/app/img/luna.png'
import gianna from '@/app/img/gianna.png'
import { ReactNode } from "react";
import twitter from '@/app/img/twitter.png'
import facebook from '@/app/img/facebook.png'
import linkedin from '@/app/img/linkedin.png'


export type SocialLink = {
    face: string;
    icon: string;
};
export type SkillInfo = {
    name: string;
   percentage: number;
};
export type qaInfo = {
    question: string;
   answer:string;
};

export type TypeProf = {
    id: number;
    name: string;
    image: string;
    profession: string;
    country: string
    mail: string;
    phone: string;
    site: string;
    description:string;
    biography:string;
    links: {
        facebook?: SocialLink;
        twitter?: SocialLink;
        linkedin?: SocialLink;
    };
    percentages:{
        skill1:SkillInfo;
        skill2:SkillInfo;
        skill3:SkillInfo;
    },
    questions:{
        qa1:qaInfo;
        qa2:qaInfo;
        qa3:qaInfo;
    }
};

export const profs: TypeProf[] = [
    {
        id: 1,
        name: 'Nattasha Julie',
        profession: 'Design',
        country: 'Australia',
        image: charlotte.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            },
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:65
            },
            skill2:{
                name:'Team Managment',
                percentage:95
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:95
            }

        },
        questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
    {
        id: 2,
        name: 'Nattasha Julie',
        profession: 'Design',
        country: 'Australia',
        image: nattasha.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            },
            linkedin: {
                face: "https://www.linkedin.com/in/nattasha-julie/",
                icon: linkedin.src,
            },
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:75
            },
            skill2:{
                name:'Team Managment',
                percentage:55
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:45
            }

        },
        questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
    {
        id: 3,
        name: 'Avery Julie',
        profession: 'Design',
        country: 'Australia',
        image: averyj.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            }
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:65
            },
            skill2:{
                name:'Team Managment',
                percentage:95
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:95
            }

        },
        questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
    {
        id: 4,
        name: 'Nora Julie',
        profession: 'Design',
        country: 'Australia',
        image: nora.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            }
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:45
            },
            skill2:{
                name:'Team Managment',
                percentage:55
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:85
            }

        },
        questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    }, {
        id: 5,
        name: 'Charlotte Levi',
        profession: 'Design',
        country: 'Australia',
        image: charlotte.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            },
            linkedin: {
                face: "https://www.linkedin.com/in/nattasha-julie/",
                icon: linkedin.src,
            },
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:95
            },
            skill2:{
                name:'Team Managment',
                percentage:25
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:35
            }

        },
        questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
    {
        id: 6,
        name: 'Sofia Carter',
        profession: 'Design',
        country: 'Australia',
        image: sofia.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            }
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:55
            },
            skill2:{
                name:'Team Managment',
                percentage:55
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:55
            }

        }, questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
    {
        id: 7,
        name: 'Luna James',
        profession: 'Design',
        country: 'Australia',
        image: luna.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            }
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:95
            },
            skill2:{
                name:'Team Managment',
                percentage:85
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:75
            }

        },
        questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
    {
        id: 8,
        name: 'Gianna Mateo',
        profession: 'Design',
        country: 'Australia',
        image: gianna.src,
        phone: '+1 (378) 400-1234',
        mail: 'julie@email.com',
        site: 'info@yourdomain.com',
        description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which do not look even slightly believable.',
        biography:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.',
        links: {
            facebook: {
                face: "https://www.facebook.com/nattasha.julie",
                icon: facebook.src,
            },
            twitter: {
                face: "https://www.twitter.com/nattasha_julie/",
                icon: twitter.src,
            }
        },
        percentages:{
            skill1:{
                name:'Project Design',
                percentage:45
            },
            skill2:{
                name:'Team Managment',
                percentage:75
            },
            skill3:{
                name:'Client Satisfaction',
                percentage:75
            }

        }, questions:{
            qa1:{
question:"Website & Mobile App Design?",
answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa2:{
                question:"How to Easy Successful Projects?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            },
            qa3:{
                question:"International Trade Experience?",
                answer:"Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus."
            }
        }
    },
]