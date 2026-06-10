// import BlogPost from '../types/blog';
import blogTeen from '../assets/driving-lesson.jpg';
import blogAdult from '../assets/tony-in-car.jpg';
import blogSenior from '../assets/driving-2.jpg';

interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    isFeatured: boolean;
    date: string;
    image: string;
    style?: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'safe-driving-teenagers',
        title: 'Safe Driving Tips for Teenagers',
        summary: 'Essential safety tips every new teenage driver should know to stay safe on the road.',
        content: 'Driving is a big responsibility. For teenagers, it is important to understand the rules of the road and the importance of focused driving. Avoid distractions, always wear your seatbelt, and follow speed limits. Practice makes perfect, and at Estop Driving School, we ensure you get the best start.',
        category: 'Teenagers',
        isFeatured: true,
        date: 'June 1, 2026',
        image: blogTeen,
        slug: 'safe-driving-tips-for-teenagers'
    },
    {
        id: 'adult-nervous-drivers',
        title: 'Tips for Nervous Adult Drivers',
        summary: 'Overcoming driving anxiety is possible with the right approach and patient instruction.',
        content: 'Many adults feel nervous when getting behind the wheel, especially if they are learning later in life. Our instructors specialize in nervous driver training, providing a calm and supportive environment to help you build confidence.',
        category: 'Adults',
        isFeatured: false,
        date: 'June 5, 2026',
        image: blogAdult,
        slug: 'tips-for-nervous-adult-drivers'
    },
    {
        id: 'senior-driver-safety',
        title: 'Senior Driver Safety and Refresher Courses',
        summary: 'Staying safe on the road as a senior driver with updated knowledge and skills.',
        content: 'As we age, it is important to keep our driving skills sharp. Our refresher courses for seniors cover updated traffic laws and defensive driving techniques to ensure safety for everyone on the road.',
        category: 'Seniors',
        isFeatured: false,
        date: 'June 7, 2026',
        image: blogSenior,
        slug: 'senior-driver-safety-and-refresher-courses'
    }
];

export const blog = blogPosts;