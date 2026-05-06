// src/pages/Articles.jsx
import { useState, useEffect } from 'react'
import { 
  BookOpenIcon, 
  ArrowRightIcon, 
  ArrowLeftIcon,
  UserCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

// ── EXACT ARTICLE DATA EXTRACTED FROM YOUR HTML ──
const articlesData = [
  {
    id: 1,
    title: "How to Help Your Child Love Math?",
    subtitle: "Strategies for Engaging and Inspiring Young Mathematicians",
    author: "The Study Zone Team",
    sections: [
      { type: 'p', content: "Mathematics is a subject that often evokes mixed emotions in children. Some may find it intimidating or boring, while others may struggle to see its relevance in their lives. However, fostering a love for math is essential as it lays the foundation for critical thinking, problem-solving skills, and logical reasoning. In this article, we will explore practical strategies that parents can employ to make math engaging, interactive, and enjoyable for their children, ultimately helping them develop a genuine love for the subject." },
      { type: 'h3', content: "1. Discover Math in Everyday Life:" },
      { type: 'p', content: "One of the most effective ways to make math relatable is by showing children its relevance in their daily lives. Take advantage of real-life situations to introduce math concepts. Whether it's measuring ingredients while cooking, calculating change during a shopping trip, or discussing patterns in nature, encourage your child to recognize the practicality and applicability of math." },
      { type: 'h3', content: "2. Embrace Hands-On Learning:" },
      { type: 'p', content: "Math doesn't have to be confined to textbooks and worksheets. Engage your child in hands-on activities that make math come alive. Utilize manipulatives like building blocks, cubes, or counting objects to help them visualize and understand abstract concepts. By making math tangible, children can actively explore and experiment, solidifying their understanding." },
      { type: 'h3', content: "3. Tap into the Power of Technology:" },
      { type: 'p', content: "In this digital age, technology offers a multitude of resources to make math fun and interactive. Explore educational apps and online platforms specifically designed for children to learn math in an engaging way. These tools often incorporate games, puzzles, and animated lessons, turning math into an exciting adventure." },
      { type: 'h3', content: "4. Relate Math to the Real World:" },
      { type: 'p', content: "Help your child see that math exists beyond the confines of a classroom. Introduce them to the stories of famous mathematicians and their contributions. Highlight how math plays a crucial role in various professions, such as architecture, sports, or technology. By showcasing real-world applications, children can appreciate the practical significance of math in different contexts." },
      { type: 'h3', content: "5. Encourage Curiosity and Exploration:" },
      { type: 'p', content: "Nurture your child's natural curiosity by allowing them to ask questions and explore math concepts freely. Offer challenging problems that stimulate critical thinking and problem-solving skills. Celebrate their efforts, regardless of the outcome, to build confidence and a positive attitude towards math." },
      { type: 'h3', content: "6. Celebrate Achievements and Progress:" },
      { type: 'p', content: "Recognize and celebrate your child's math achievements, no matter how small. Create a supportive environment where they feel encouraged to take risks and learn from their mistakes. Focus on the process of problem-solving and the effort put forth, emphasizing that math is a journey of growth and improvement." },
      { type: 'h3', content: "7. Be a Math Role Model:" },
      { type: 'p', content: "Your attitude towards math significantly influences your child's perception. Embrace a positive mindset and show enthusiasm when discussing math concepts or solving problems together. Let them see your genuine interest in math and how it can be applied to real-world scenarios. By being a math role model, you inspire and motivate them to develop a love for the subject." },
      { type: 'p', content: "By employing these strategies, parents can transform math into an exciting and engaging experience for their children. By incorporating math into everyday life, embracing hands-on learning, utilizing technology, relating math to the real world, encouraging curiosity, celebrating achievements, and being a positive math role model, you can ignite a passion for math in your child. Remember, developing a love for math is a journey, and with your guidance and support, your child can embark on this rewarding adventure with confidence and enthusiasm." }
    ]
  },
  {
    id: 2,
    title: "How to Develop Reading Habits in Kids?",
    subtitle: "A Guide for Parents",
    author: "The Study Zone Team",
    sections: [
      { type: 'p', content: "Instilling a love for reading in children from a young age is a gift that will benefit them throughout their lives. Not only does reading enhance language skills, vocabulary, and critical thinking abilities, but it also sparks imagination and creativity. As parents, it is crucial to cultivate a reading habit in kids, and this article will provide you with practical tips and strategies to do just that." },
      { type: 'h3', content: "1. Start Early and Lead by Example:" },
      { type: 'p', content: "Begin fostering a reading habit in your child as early as possible. Surround them with age-appropriate books and create a reading routine. Establish designated reading times where the entire family can engage in reading activities together. Seeing parents and older siblings reading regularly sends a powerful message and encourages children to follow suit." },
      { type: 'h3', content: "2. Create a Reading-Friendly Environment:" },
      { type: 'p', content: "Design a cozy and inviting reading nook in your home. Set up a special bookshelf or display area where children can easily access their favorite books. Make sure the space is well-lit and comfortable, with cushions or bean bags. A dedicated reading corner will create a positive association with reading and make it a desirable activity for your child." },
      { type: 'h3', content: "3. Encourage Book Selection and Variety:" },
      { type: 'p', content: "Allow your child to choose their own books based on their interests. Visit libraries, bookstores, or explore online platforms with a wide range of children's literature. Encouraging their choices helps develop a sense of ownership and enthusiasm for reading. Introduce different genres and formats such as fiction, non-fiction, comics, and magazines to provide variety and cater to their evolving tastes." },
      { type: 'h3', content: "4. Make Reading Interactive and Fun:" },
      { type: 'p', content: "Transform reading into an interactive and enjoyable experience. Read aloud to your child, using animated voices and expressions to bring the characters to life. Engage in discussions about the story, ask questions, and encourage them to share their thoughts and predictions. Consider organizing small book clubs or reading circles with other children, fostering a sense of community and excitement around books." },
      { type: 'h3', content: "5. Set Regular Reading Goals and Rewards:" },
      { type: 'p', content: "Establish achievable reading goals for your child, such as completing a certain number of books or reading for a specific duration each day. Track their progress and reward their achievements. Rewards can include stickers, bookmarks, small treats, or even special outings to book fairs or author events. Celebrating their reading milestones creates a sense of accomplishment and motivates them to continue exploring new books." },
      { type: 'h3', content: "6. Limit Screen Time and Prioritize Reading:" },
      { type: 'p', content: "In today's digital age, it's essential to strike a balance between screen time and reading. Set reasonable limits on TV, video games, and other electronic devices, and encourage children to dedicate some of that time to reading instead. Make reading a preferred leisure activity by offering enticing alternatives, such as story-based mobile apps or interactive e-books." },
      { type: 'h3', content: "7. Be a Reading Role Model and Engage in Discussions:" },
      { type: 'p', content: "As a parent, demonstrate your own love for reading. Share your reading experiences with your child, discuss books you've enjoyed, and ask them about their favorite stories. Engaging in conversations about books helps develop their comprehension skills, encourages critical thinking, and deepens their connection to literature." },
      { type: 'p', content: "Developing reading habits in kids is an investment in their future academic success and personal growth. By starting early, creating a reading-friendly environment, encouraging book selection, and making reading interactive and fun, you can foster a lifelong love for books. Remember, being a reading role model and actively participating in your child's reading journey are key ingredients for success. So, embark on this delightful adventure together, and watch your child's imagination soar through the pages of their favorite books." }
    ]
  },
  {
    id: 3,
    title: "The Advantages of Tutoring",
    subtitle: "A Smarter Choice for Learning",
    author: "The Study Zone Team",
    sections: [
      { type: 'p', content: "In today's dynamic educational landscape, traditional classroom learning is no longer the only avenue for knowledge acquisition. Many students are turning to tutoring as a valuable alternative, reaping a multitude of benefits. This article explores the advantages of tutoring over classroom learning and highlights how personalized attention and tailored instruction can significantly enhance a student's academic journey." },
      { type: 'h3', content: "1. Individualized Attention and Customized Learning:" },
      { type: 'p', content: "One of the most significant advantages of tutoring is the undivided attention and personalized approach it offers. Unlike crowded classrooms where teachers have limited time to address individual concerns, tutoring sessions focus solely on the specific needs of the student. Tutors can identify a student's strengths and weaknesses, develop targeted learning plans, and adapt their teaching style to suit the student's unique learning preferences. This tailored instruction enables students to grasp concepts more effectively, boosting their overall academic performance." },
      { type: 'h3', content: "2. Flexible Learning Environment:" },
      { type: 'p', content: "Tutoring provides a flexible learning environment that can be customized to fit a student's schedule, pace, and preferences. Unlike fixed classroom hours, tutoring sessions can be scheduled at convenient times, allowing students to optimize their learning experience without compromising other commitments. This flexibility ensures that students can learn at their own pace, delve deeper into challenging topics, and review material until they have a solid understanding. Such adaptability nurtures a sense of ownership and empowerment, ultimately leading to improved learning outcomes." },
      { type: 'h3', content: "3. Enhanced Confidence and Motivation:" },
      { type: 'p', content: "With the personal attention and support provided in tutoring sessions, students often experience a boost in confidence and motivation. Individualized instruction allows for constructive feedback, which helps students identify their areas of improvement and build self-assurance. Tutors can provide encouragement, fostering a positive learning atmosphere that motivates students to overcome obstacles and achieve their goals. As students witness their progress and gain a deeper understanding of subjects, their confidence soars, leading to increased engagement and a stronger passion for learning." },
      { type: 'h3', content: "4. Targeted Remediation and Acceleration:" },
      { type: 'p', content: "Tutoring excels in both remediation and acceleration. For struggling students, tutors can identify knowledge gaps and provide targeted remedial assistance, addressing specific weaknesses to help students catch up with their peers. This focused attention ensures that students master fundamental concepts before progressing further, preventing the accumulation of knowledge gaps that can hinder future learning. On the other hand, tutoring can also cater to advanced students, offering opportunities for accelerated learning and exploring more challenging material beyond the standard curriculum." },
      { type: 'h3', content: "5. Strong Mentorship and Support:" },
      { type: 'p', content: "Tutoring often creates a mentor-student relationship that goes beyond academics. Tutors serve as mentors, providing guidance and support to students as they navigate their educational journey. This personalized mentorship enables tutors to understand a student's aspirations, goals, and challenges, offering holistic support and advice. Tutors can also instill valuable study skills, time management techniques, and effective learning strategies that students can carry with them throughout their academic and professional lives." },
      { type: 'p', content: "While classroom learning has long been the traditional approach, tutoring offers numerous advantages that can significantly enhance a student's educational experience. The individualized attention, customized learning, flexible environment, enhanced confidence, and targeted remediation or acceleration make tutoring an attractive option for students seeking personalized support. By leveraging the benefits of tutoring, students can unlock their full potential, achieve academic success, and develop crucial skills that extend far beyond the classroom." }
    ]
  },
  {
    id: 4,
    title: "The Power of Summer Tutoring",
    subtitle: "Maximizing Your Child's Potential",
    author: "S. Gill",
    sections: [
      { type: 'p', content: "Summer break is often associated with carefree fun and relaxation, but did you know that it's also the perfect time to invest in your child's education? While vacations and outdoor activities are important, enrolling your child in summer tutoring can provide numerous benefits that can positively impact their academic performance and personal growth. In this article, we will delve into the compelling reasons why summer is the best time for tutoring, backed by research and expert opinions." },
      { type: 'h3', content: "1. Preventing the Summer Slide: Retaining Knowledge for Long-Term Success" },
      { type: 'p', content: "Research shows that students can experience learning loss during extended breaks, known as the \"summer slide.\" According to studies published in the Review of Educational Research, students can lose up to two months' worth of math and reading skills over the summer. However, consistent tutoring sessions during this period can combat this loss and help students retain and reinforce their knowledge. Summer tutoring acts as a powerful tool to prevent academic regression and ensure a smooth transition into the upcoming school year." },
      { type: 'h3', content: "2. Individualized Attention: Unleashing Your Child's Potential" },
      { type: 'p', content: "One of the significant advantages of summer tutoring is the individualized attention your child receives. With smaller class sizes or one-on-one instruction, tutors can tailor lessons to meet the specific needs and learning styles of your child. They can identify and address any academic gaps, reinforce foundational concepts, and provide personalized support to build confidence in challenging subjects. This focused approach enables your child to reach their full potential academically." },
      { type: 'h3', content: "3. Gaining an Academic Edge: Preparing for Success" },
      { type: 'p', content: "Summer tutoring provides a unique opportunity for your child to gain an academic edge. By previewing key concepts and skills, students can enter the new school year with confidence and a solid foundation. Tutors can offer a preview of upcoming curricula, helping students grasp challenging topics in advance. By bridging the gap between school years, summer tutoring ensures that your child is well-prepared, reducing academic stress and boosting overall performance." },
      { type: 'h3', content: "4. Targeted Skill Development: Building a Strong Academic Toolkit" },
      { type: 'p', content: "Beyond core subjects, summer tutoring can focus on developing essential skills that are often overlooked during the regular school year. These skills include critical thinking, problem-solving, organization, and time management – skills that are vital for academic success and future endeavors. Specialized tutoring programs designed to nurture these skills provide an invaluable opportunity for your child to build a strong academic toolkit, setting them up for lifelong achievement." },
      { type: 'h3', content: "5. Flexible Scheduling: Convenience and Optimal Learning" },
      { type: 'p', content: "Summer break offers greater flexibility in terms of scheduling tutoring sessions. Without the constraints of regular school hours and extracurricular commitments, students can dedicate focused time to learning without feeling overwhelmed. This flexibility allows families to create a customized schedule that accommodates vacations and other summer activities while ensuring consistent educational support. By optimizing the learning schedule, you can ensure that your child receives the maximum benefit from their tutoring sessions." },
      { type: 'h3', content: "6. Empowering Personal Growth: Boosting Confidence and Motivation" },
      { type: 'p', content: "Summer tutoring provides an ideal environment for fostering personal growth, self-confidence, and motivation. With dedicated attention and encouragement from tutors, students can overcome challenges, set achievable goals, and experience the satisfaction of academic progress. This positive reinforcement can have a profound impact on their self-esteem, attitude towards learning, and overall personal development. Summer tutoring empowers your child to embrace challenges, develop resilience, and become a confident and motivated learner." },
      { type: 'p', content: "Summer break is not just a time for relaxation, but also an opportunity to invest in your child's academic growth. The facts are undeniable: without consistent educational engagement during this extended break, students risk experiencing the detrimental effects of the summer slide. By enrolling your child in summer tutoring, you can prevent learning loss, bridge academic gaps, and foster crucial skills for their future success. Take advantage of this prime time to optimize your child's learning journey and unlock their full potential. Choose summer tutoring with 'The Study Zone' as a pathway to support your child's educational journey, ensuring they enter the next school year with confidence, readiness, and a solid foundation for continued success." }
    ]
  },
  {
    id: 5,
    title: "The Power of Tutoring",
    subtitle: "Unleashing the Potential Within",
    author: "S. Gill",
    sections: [
      { type: 'p', content: "Education is the cornerstone of human progress and personal growth. It equips individuals with the necessary knowledge, skills, and confidence to navigate the complexities of life. While formal education provides a solid foundation, the importance of tutoring cannot be underestimated. Tutoring is a transformative and empowering experience that goes beyond the boundaries of traditional classrooms. In this article, we explore the compelling reasons why tutoring is important, both for students seeking academic support and those striving for excellence." },
      { type: 'h3', content: "1. Personalized Learning:" },
      { type: 'p', content: "One of the most significant advantages of tutoring is its ability to provide personalized learning experiences. Every student is unique, with individual strengths, weaknesses, and learning styles. Unlike crowded classrooms, tutoring allows for tailored instruction, where tutors can adapt their teaching methods to match the student's specific needs. This personalized attention fosters a deeper understanding of concepts, boosts confidence, and enables students to reach their full potential." },
      { type: 'h3', content: "2. Bridging Knowledge Gaps:" },
      { type: 'p', content: "Throughout the educational journey, students may encounter stumbling blocks that impede their progress. These knowledge gaps can hinder their confidence and hinder their overall performance. Tutoring acts as a bridge, helping students overcome these obstacles by filling in the missing pieces of knowledge. By addressing specific areas of weakness, tutors create a strong foundation, ensuring students have a comprehensive understanding of the subject matter." },
      { type: 'h3', content: "3. Boosting Confidence and Motivation:" },
      { type: 'p', content: "The path to success is often paved with challenges and setbacks. Many students face academic difficulties that can erode their self-esteem and dampen their motivation. Tutoring provides a supportive environment where students can openly ask questions, seek clarification, and receive constructive feedback. Through personalized attention and encouragement, tutors empower students to believe in their abilities and strive for excellence. As confidence grows, so does motivation, leading to a positive cycle of achievement." },
      { type: 'h3', content: "4. Developing Effective Study Skills:" },
      { type: 'p', content: "Academic success is not solely dependent on intelligence but also on the acquisition of effective study skills. Tutoring equips students with valuable strategies such as time management, note-taking techniques, and critical thinking abilities. These essential skills extend beyond the classroom and prepare students for lifelong learning, enhancing their chances of success in higher education and professional endeavors." },
      { type: 'h3', content: "5. Cultivating a Love for Learning:" },
      { type: 'p', content: "Education should never be reduced to a mere pursuit of grades. It should ignite a passion for learning and a curiosity that transcends boundaries. Tutoring, with its individualized approach, allows students to explore subjects at their own pace and delve deeper into areas of interest. By fostering a love for learning, tutors not only cultivate academic achievement but also shape well-rounded individuals who are eager to embrace new knowledge and ideas." },
      { type: 'h3', content: "6. Mentorship and Guidance:" },
      { type: 'p', content: "Tutors often become more than just educators—they become mentors and guides on the educational journey. Through their expertise and experience, tutors offer valuable insights, career advice, and life lessons. This mentorship relationship extends beyond the immediate academic realm, helping students develop crucial skills such as problem-solving, decision-making, and goal setting. Tutors serve as role models, inspiring students to dream big and pursue their aspirations." },
      { type: 'p', content: "In a world where education plays an increasingly vital role, tutoring emerges as an indispensable tool for unlocking potential. By offering personalized learning, bridging knowledge gaps, boosting confidence, developing study skills, cultivating a love for learning, and providing mentorship, tutoring has the power to transform lives. It empowers students to overcome challenges, surpass their own expectations, and become lifelong learners." }
    ]
  },
  {
    id: 6,
    title: "The Power of Focus",
    subtitle: "Achieving Your Goals with Determination",
    author: "S. Gill",
    sections: [
      { type: 'p', content: "In a world filled with constant distractions and competing priorities, staying focused on your goals can be a challenging endeavor. However, it is this very ability to concentrate and channel your energy towards your objectives that separates the extraordinary from the ordinary. As renowned author and motivational speaker Brian Tracy once said, \"Successful people are simply those with successful habits.\" In this article, we will explore the importance of staying focused to achieve your goals and provide you with valuable insights from famous personalities who have mastered the art of concentration." },
      { type: 'h3', content: "1. The Foundation of Success: Focus" },
      { type: 'p', content: "Focus serves as the bedrock upon which success is built. Without it, even the loftiest aspirations can fade into mediocrity. Tony Robbins, a world-renowned life coach, emphasizes the significance of focus by stating, \"Where focus goes, energy flows.\" When you direct your attention and energy towards a specific goal, you ignite a powerful force that propels you towards its attainment. Without focus, you risk spreading your efforts thin and diluting your chances of achieving the desired outcome." },
      { type: 'h3', content: "2. Eliminate Distractions, Embrace Productivity" },
      { type: 'p', content: "Distractions are the arch-enemies of focus. In today's digital age, we are constantly bombarded with notifications, social media updates, and endless online temptations. To counteract these distractions, it is crucial to create an environment conducive to productivity. As the late Steve Jobs once said, \"Your time is limited, don't waste it living someone else's life.\" Set boundaries, establish a designated workspace, and allocate specific time slots for focused work. By taking charge of your environment, you regain control over your attention and enhance your ability to concentrate on your goals." },
      { type: 'h3', content: "3. The Power of Persistence" },
      { type: 'p', content: "Persistence is the unwavering determination to keep moving forward, even in the face of obstacles and setbacks. Walt Disney, the visionary behind the iconic Disney empire, famously said, \"All our dreams can come true if we have the courage to pursue them.\" Achieving your goals requires perseverance, as setbacks are inevitable on the path to success. Instead of viewing challenges as roadblocks, embrace them as opportunities for growth and learning. With unwavering persistence, you can navigate through difficulties and emerge stronger, closer to realizing your aspirations." },
      { type: 'h3', content: "4. Prioritize and Take Small Steps" },
      { type: 'p', content: "When working towards a long-term goal, it is crucial to break it down into smaller, manageable tasks. This approach not only makes the goal seem more attainable but also allows for steady progress. Mark Twain once remarked, \"The secret of getting ahead is getting started.\" By prioritizing your tasks and taking consistent, small steps, you build momentum and create a sense of accomplishment. Each completed task fuels your motivation and propels you further towards your ultimate objective." },
      { type: 'h3', content: "5. Cultivate Mindfulness and Resilience" },
      { type: 'p', content: "Mindfulness, the practice of being fully present in the moment, can significantly enhance your focus. By training your mind to remain in the present, you can minimize distractions and maximize your productivity. As meditation teacher and author Eckhart Tolle advises, \"Realize deeply that the present moment is all you ever have.\" Additionally, cultivating resilience is essential for maintaining focus in the face of adversity. Learn from past failures, adapt to changing circumstances, and bounce back stronger than before." },
      { type: 'p', content: "In a world characterized by endless distractions, staying focused on your goals is a paramount skill that sets successful individuals apart. Remember the words of legendary basketball player Michael Jordan: \"Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.\" Embrace the power of focus, eliminate distractions, persist in the face of challenges, prioritize tasks, and cultivate mindfulness and resilience." }
    ]
  },
  {
    id: 7,
    title: "Math in Everyday Life",
    subtitle: "Uncover the Surprising Ways It Shapes Your World",
    author: "S. Gill",
    sections: [
      { type: 'p', content: "Think math is just dusty textbooks and endless drills? Think again! This hidden superhero shapes your world in surprising ways, from your morning coffee to the stars above. Dive into the fascinating realm of math in everyday life and uncover its impact on everything you do!" },
      { type: 'h3', content: "Brewing Brilliance:" },
      { type: 'p', content: "That perfect cup of coffee? It's a symphony of ratios and measurements, orchestrated by the magic of math. As Carl Sagan said, \"Mathematics is the music of reason,\" harmonizing flavors for a delicious start to your day." },
      { type: 'h3', content: "Cityscapes of Geometry:" },
      { type: 'p', content: "Skyscrapers pierce the sky thanks to intricate calculations, echoing the golden ratio found in nature. Bridges defy gravity with the help of complex equations, proving Blaise Pascal's point: \"We build too many walls and not enough bridges.\" Math becomes the bridge-builder, connecting possibilities and shaping our world." },
      { type: 'h3', content: "Finance's Invisible Hand:" },
      { type: 'p', content: "Algorithms powered by math guide the invisible hand of finance, influencing investments and shaping economic trends. This echoes Ada Lovelace's prediction: \"Mathematical reasoning may some day become a machine.\" In the digital age, math fuels the engine of finance." },
      { type: 'h3', content: "Beyond the Tangible:" },
      { type: 'p', content: "But math's true magic lies in its inherent wonder and beauty. From mesmerizing fractals in nature to elegant equations unlocking universal secrets, math unveils a captivating world. As Albert Einstein said, \"The most beautiful thing we can experience is the mysterious.\" Math allows us to peek into this mystery, revealing the interconnectedness and order that govern our universe." },
      { type: 'h3', content: "Embrace the Everyday Superhero:" },
      { type: 'p', content: "So, the next time you bake a cake, marvel at a skyscraper, or navigate your phone, remember the unsung hero shaping it all: math. It's not just equations; it's a language of possibilities waiting to be explored. Unleash the power of math and see the world through a whole new lens!" }
    ]
  },
  {
    id: 8,
    title: "The Importance of a Diverse and Inclusive Classroom",
    subtitle: "A Teacher's Perspective",
    author: "S. Gill",
    sections: [
      { type: 'p', content: "In today's multicultural society, fostering a diverse and inclusive classroom is more important than ever. As an educator with over 17 years of experience, I have witnessed firsthand the profound impact that diversity and inclusivity can have on students' academic and personal growth. Here, I share my insights on the importance of these principles and how I implement them in my teaching practice." },
      { type: 'h3', content: "Why Diversity and Inclusion Matter" },
      { type: 'p', content: "Diversity and inclusion in the classroom are not just about meeting educational standards; they are about creating an environment where every student feels valued and respected. A diverse classroom brings together students from various cultural, ethnic, and socio-economic backgrounds, enriching the learning experience for everyone. Inclusion ensures that all students, regardless of their abilities or backgrounds, have equal access to learning opportunities and resources." },
      { type: 'p', content: "Research has shown that diverse and inclusive classrooms lead to better learning outcomes, improved critical thinking skills, and enhanced creativity. Students exposed to different perspectives are more likely to develop empathy, cultural awareness, and a broader worldview. These skills are essential for success in our increasingly globalized world." },
      { type: 'h3', content: "Implementing Diversity and Inclusion in My Classroom" },
      { type: 'p', content: "As a teacher, I am committed to creating a classroom environment that celebrates diversity and promotes inclusivity. Here are some strategies I use to achieve this:" },
      { type: 'p', content: "Culturally Responsive Teaching: I incorporate diverse cultural perspectives into my lessons and use materials that reflect the backgrounds of all my students. This helps students see themselves represented in the curriculum and fosters a sense of belonging." },
      { type: 'p', content: "Differentiated Instruction: I tailor my teaching methods to meet the diverse learning needs of my students. This includes providing various types of learning activities, using visual, auditory, and kinesthetic approaches, and offering additional support or challenges as needed." },
      { type: 'p', content: "Inclusive Classroom Environment: I create a welcoming and inclusive classroom environment by setting clear expectations for respectful behavior, celebrating cultural events and holidays, and encouraging students to share their experiences and perspectives." },
      { type: 'p', content: "Collaborative Learning: I promote collaborative learning by organizing group activities that encourage students to work together and learn from each other. This helps build a sense of community and teaches students to appreciate different viewpoints." },
      { type: 'p', content: "Ongoing Professional Development: I stay informed about the latest research and best practices in diversity and inclusion by participating in professional development opportunities. This allows me to continuously improve my teaching strategies and better support my students." },
      { type: 'h3', content: "The Impact of a Diverse and Inclusive Classroom" },
      { type: 'p', content: "Creating a diverse and inclusive classroom has a positive impact on students' academic performance and social development. Students learn to respect and value each other's differences, contributing to a supportive and cooperative learning community. They also develop critical thinking and problem-solving skills by engaging with diverse perspectives and ideas." },
      { type: 'p', content: "In my classroom, I have seen students thrive in an environment where they feel safe, respected, and valued. They are more engaged in their learning, more willing to take risks, and more likely to support their peers. This positive classroom culture not only enhances academic achievement but also prepares students to be compassionate and responsible global citizens." },
      { type: 'p', content: "Diversity and inclusion are essential components of a successful and enriching educational experience. As educators, it is our responsibility to create classrooms that reflect and celebrate the diversity of our society. By implementing inclusive teaching practices and fostering a supportive learning environment, we can help all students reach their full potential and prepare them for a bright future." }
    ]
  }
];

export default function Articles() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  // Scroll to top when an article is selected
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedArticleId]);

  const selectedArticle = articlesData.find(a => a.id === selectedArticleId);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* ── SPACER TO CLEAR FIXED NAVBAR ── */}
      <div className="h-28 md:h-36 w-full"></div>

      {/* ═══════════════════════════════════════
          MASTER VIEW: GRID OF ARTICLES
      ═══════════════════════════════════════ */}
      {!selectedArticle && (
        <>
          <section 
            className="relative overflow-hidden"
            style={{ paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
          >
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-200 mb-8 shadow-lg">
                <DocumentTextIcon className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="text-sm font-bold text-teal-700 uppercase tracking-widest">
                  Insights & Resources
                </span>
              </div>
              
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight"
                style={{ lineHeight: 1.15, marginBottom: '2rem' }}
              >
                Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Articles</span>
              </h1>
              
              <p 
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto break-words"
            style={{ margin: '0 auto 3rem auto' }}
              >
                Expert advice, study strategies, and parenting tips from The Study Zone team to help your child succeed in and out of the classroom.
              </p>
            </div>
          </section>

          <section 
            style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', paddingBottom: '8rem', paddingTop: '4rem' }}
          >
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2.5rem' }}>
                {articlesData.map((article) => (
                  <div 
                    key={article.id} 
                    className="flex flex-col rounded-3xl border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg group overflow-hidden"
                    style={{ backgroundColor: 'var(--color-card-bg)' }}
                    onClick={() => setSelectedArticleId(article.id)}
                  >
                    {/* Abstract Header Image Placeholder */}
                    <div 
                      className="h-48 w-full shrink-0 flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: 'var(--color-section-alt)', borderBottom: '1px solid var(--color-border)' }}
                    >
                       <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors" />
                       <BookOpenIcon className="w-16 h-16 text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
                    </div>
                    
                    <div className="flex flex-col flex-1" style={{ padding: '2rem', gap: '1.25rem' }}>
                      <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                        <UserCircleIcon className="w-5 h-5 text-teal-600" />
                        {article.author}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight break-words group-hover:text-teal-700 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-600 text-base leading-relaxed break-words" style={{ marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {article.sections[0].content}
                      </p>

                      <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:text-teal-700 transition-colors">
                        Read Article <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════════════════════════════════════
          DETAIL VIEW: SINGLE ARTICLE READING MODE
      ═══════════════════════════════════════ */}
      {selectedArticle && (
        <section 
          className="relative overflow-hidden"
          style={{ paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
        >
           <div className="container max-w-4xl mx-auto relative z-10">
              
              {/* Back Button */}
              <button 
                onClick={() => setSelectedArticleId(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 font-medium"
              >
                <ArrowLeftIcon className="w-5 h-5" /> Back to all articles
              </button>
              
              {/* Article Header */}
              <div style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight break-words leading-tight" style={{ marginBottom: '1.5rem' }}>
                  {selectedArticle.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-teal-600 font-medium break-words leading-relaxed" style={{ marginBottom: '2rem' }}>
                  {selectedArticle.subtitle}
                </h2>
                <div className="flex items-center gap-3 text-slate-600">
                   <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <UserCircleIcon className="w-6 h-6 text-slate-700" />
                   </div>
                   <div>
                     <p className="font-semibold text-slate-900 text-sm">Written by</p>
                     <p className="text-sm text-slate-700">{selectedArticle.author}</p>
                   </div>
                </div>
              </div>

              {/* Article Body */}
              <article className="flex flex-col" style={{ gap: '2rem' }}>
                {selectedArticle.sections.map((sec, idx) => {
                  if (sec.type === 'h3') {
                    return (
                      <h3 
                        key={idx} 
                        className="text-2xl md:text-3xl font-bold text-slate-900 break-words" 
                        style={{ marginTop: '1.5rem', lineHeight: 1.4 }}
                      >
                        {sec.content}
                      </h3>
                    )
                  }
                  return (
                    <p 
                      key={idx} 
                      className="text-lg text-slate-700 break-words" 
                      style={{ lineHeight: 1.8 }}
                    >
                      {sec.content}
                    </p>
                  )
                })}
              </article>

              {/* Bottom Navigation */}
              <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}>
                <button 
                  onClick={() => setSelectedArticleId(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all bg-teal-700 hover:bg-teal-600 border border-teal-600 hover:border-teal-700"
                >
                  <ArrowLeftIcon className="w-5 h-5" /> Read More Articles
                </button>
              </div>

           </div>
        </section>
      )}

    </div>
  )
}