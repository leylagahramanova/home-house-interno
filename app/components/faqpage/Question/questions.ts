import answer from '@/app/img/answer.png'
import project from '@/app/img/project.png'
export type TypeQuestion = {
    id: number;
    question: string;
    answer: string;
    position: string;
};

export type TypeCategory = {
    id: number;
    category: string;
    questions: TypeQuestion[];
    image:string;
};

export const categories: TypeCategory[] = [
    {
        id: 1,
        category: 'Every Question Answered',
        image:answer.src,
        questions: [
            {
                id: 1,
                question: 'What is the Hipcouch Interior Design Service?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'open',
            },
            {
                id: 2,
                question: 'So, how exactly does this work?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            },
            {
                id: 3,
                question: 'What cities do you currently operate in?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            },
            {
                id: 4,
                question: 'Hipcouch Interior Design Service?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            },
            {
                id: 5,
                question: 'What kind of interior designers do you have?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            }
        ],
    },
    {
        id: 2,
        category: 'Project related questions',
        image:project.src,
        questions: [
            {
                id: 1,
                question: 'How long does it take?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'open',
            },
            {
                id: 2,
                question: 'Can I use my existing furnishings?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            },
            {
                id: 3,
                question: 'I put into redesigning my interior?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            },
            {
                id: 4,
                question: 'What do your services cost?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            },
            {
                id: 5,
                question: 'Do you offer free consultations?',
                answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
                position: 'close',
            }
            
        ],

    },
];