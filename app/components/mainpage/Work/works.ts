
export type TypeWork = {
    id: number;
    title: string;
    description: string;
    link:string;
};

export const works: TypeWork[] = [
    {
        id: 1,
        title: 'Project Plan',
        description: 'There are many variations of the passages of lorem Ipsum from available, majority.',
   link:'/project',
    },
    {
        id: 2,
        title: 'Interior Work',
        description: 'There are many variations of the passages of lorem Ipsum from  available, majority.',
        link:'/services',
    },
    {
        id: 3,
        title: 'Realization',
        description: 'There are many variations of the passages of lorem Ipsum from  available, majority.',
        link:'/services-single',
    }
];
