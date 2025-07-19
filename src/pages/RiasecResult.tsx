import React, { useEffect, useState } from 'react';
import ReportCard from '@/components/ReportCard';
import StrengthCard from '@/components/StrengthCard';
import ActionItem from '@/components/ActionItem';
import SkillBadge from '@/components/SkillBadge';
import CareerCard from '@/components/CareerCard';
import StreamCard from '@/components/StreamCard';
import PathwayCard from '@/components/PathwayCard';
import ReadinessStep from '@/components/ReadinessStep';
import ResourceCard from '@/components/ResourceCard';
import AIInterestCard from '@/components/AIInterestCard';
import AIResourceCard from '@/components/AIResourceCard';
import SoftSkillCard from '@/components/SoftSkillCard';
import SoftSkillActivityCard from '@/components/SoftSkillActivityCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RiasecResult = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // AI Skills data
  const aiData = {
    ai_intro: "AI (Artificial Intelligence) is like a smart robot brain. It helps computers and machines think and do tasks like humans! You already use it when you ask voice assistants, play smart games, or see recommendations on YouTube.",
    how_ai_is_used_today: [
      "Helping doctors understand health better.",
      "Making cars smarter and safer.",
      "Creating music, art, and stories.",
      "Helping teachers with learning tools.",
      "Giving advice in games and apps."
    ],
    how_ai_affects_your_favorite_things: [
      {
        interest_area: "Art and Drawing",
        ai_role: "AI tools can help you color faster or suggest cool drawing ideas!",
        you_can_do: "Try using drawing apps that suggest shapes or use smart coloring features."
      },
      {
        interest_area: "Helping People",
        ai_role: "AI helps doctors and teachers give better help by understanding what people need.",
        you_can_do: "Learn how to ask good questions and talk kindly — AI can't replace a kind heart!"
      },
      {
        interest_area: "Games and Technology",
        ai_role: "Game creators use AI to make smart characters and new levels!",
        you_can_do: "Try game design tools or coding for kids to build your own games."
      }
    ],
    super_skills_to_learn: [
      "Be Curious — always ask 'Why?' and 'How?'",
      "Learn basic coding with block tools like Scratch.",
      "Use smart tools safely and kindly.",
      "Play with AI-powered games or art apps.",
      "Talk about your ideas with parents or teachers."
    ],
    ai_future_tips: {
      what_you_can_do: [
        "Ask your teacher about AI and how it's used.",
        "Try creating a simple chatbot or digital story.",
        "Draw your idea of a helpful robot!",
        "Watch videos that explain AI in simple ways."
      ],
      stay_safe_note: "Always talk to an adult before trying a new website or app!"
    },
    fun_resources: [
      {
        title: "Scratch Coding",
        description: "Make fun games and stories by snapping blocks of code!",
        link: "https://scratch.mit.edu/"
      },
      {
        title: "Google's Teachable Machine",
        description: "Teach your computer to recognize sounds or pictures!",
        link: "https://teachablemachine.withgoogle.com/"
      },
      {
        title: "AI for Kids - YouTube Series",
        description: "Short, fun videos that explain AI simply.",
        link: "https://www.youtube.com/results?search_query=AI+for+kids"
      }
    ]
  };

  // Stream selection data
  const streamData = {
    student_name: "Your Name Here",
    test: "RIASEC",
    top_interests: ["Conventional", "Social", "Artistic"],
    recommended_stream: {
      name: "Commerce",
      match_percentage: 92,
      reasoning: "You scored highest in Conventional, which indicates strong preferences for structured environments, organization, and data handling. Combined with high Social and Artistic scores, Commerce offers a balance of structured learning with opportunities to work with people and express creativity.",
      related_subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics (optional)"],
      alternative_streams: [
        {
          name: "Humanities/Arts",
          match_percentage: 88,
          note: "A good fit due to your strong artistic and social orientation. Fields like psychology, communication, or liberal arts could suit you well."
        }
      ]
    },
    future_pathways: [
      {
        title: "Business Analyst",
        education_required: "BCom/BBA → MBA",
        description: "Work with organizations to interpret data, optimize processes, and improve operations using both analytical and communication skills."
      },
      {
        title: "Corporate Trainer / HR Specialist",
        education_required: "BBA → MBA (HR) or Psychology",
        description: "Combine your organizational strengths with your people skills to help companies train and manage talent."
      },
      {
        title: "Advertising & Media Planner",
        education_required: "BA/BMM + Marketing or Design",
        description: "A creative path that leverages your artistic inclination within a structured business setting."
      }
    ],
    skill_alignment: {
      strengths: ["Organizational ability", "Interpersonal communication", "Aesthetic sensitivity"],
      areas_to_improve: ["Scientific reasoning", "Abstract problem-solving"]
    },
    stream_readiness_steps: [
      "Join school commerce club or finance quiz",
      "Take an online course in accounting or business basics",
      "Create a budget planner for a family event"
    ],
    career_readiness_steps: [
      "Choose Commerce stream with optional Math",
      "Explore internships or summer schools in finance, marketing, or business"
    ],
    resources: {
      books: [
        {
          title: "The Richest Man in Babylon",
          reason: "Great for developing financial literacy at a young age"
        },
        {
          title: "Made to Stick",
          reason: "To learn communication skills for marketing or social roles"
        }
      ],
      videos: [
        {
          title: "CrashCourse Economics",
          url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H"
        }
      ],
      websites: [
        "https://ncert.nic.in",
        "https://khanacademy.org",
        "https://yourstory.com"
      ]
    }
  };

  // Soft Skills data
  const softSkillsData = {
    section_intro: "Soft skills are superpowers that help you work well with others, solve problems, and feel confident! They make you awesome at school, in games, with friends — and in your future career!",
    key_soft_skills: [
      {
        name: "Teamwork",
        what_it_means: "Working nicely with others to get things done.",
        how_to_practice: "Join group projects or play team sports where you share ideas and take turns."
      },
      {
        name: "Communication",
        what_it_means: "Sharing your thoughts clearly and listening to others too.",
        how_to_practice: "Tell a story to your family or ask a classmate how their day went."
      },
      {
        name: "Problem Solving",
        what_it_means: "Figuring out what to do when something is tricky.",
        how_to_practice: "Try puzzles, games, or think of 3 ways to fix a small issue at home or school."
      },
      {
        name: "Creativity",
        what_it_means: "Thinking of new ideas and fun ways to do things.",
        how_to_practice: "Draw something from your imagination or create a story about a flying school!"
      },
      {
        name: "Empathy",
        what_it_means: "Understanding how someone else feels.",
        how_to_practice: "Ask a friend how they feel when they're sad or excited, and listen carefully."
      },
      {
        name: "Confidence",
        what_it_means: "Believing in yourself, even if something is hard.",
        how_to_practice: "Try something new every week — like speaking up in class or finishing a tough level in a game!"
      }
    ],
    daily_challenges: [
      "Say something kind to a classmate.",
      "Ask your parents if you can help with a task at home.",
      "Write a short story and read it to someone.",
      "Try to solve a small problem on your own first before asking for help.",
      "Say 'thank you' to someone today."
    ],
    why_it_matters: "When you grow these skills, you become a better friend, student, and leader! Soft skills help you shine in school and make big dreams possible!",
    fun_activity_ideas: [
      {
        activity: "Build a fort with friends or siblings.",
        soft_skills_used: ["Teamwork", "Creativity", "Problem Solving"]
      },
      {
        activity: "Make a short video talking about your favorite hobby.",
        soft_skills_used: ["Confidence", "Communication"]
      },
      {
        activity: "Help someone new in class feel welcome.",
        soft_skills_used: ["Empathy", "Teamwork"]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-6 pb-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <header className={`text-center mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'}`}>
          <div className="inline-block bg-gradient-to-r from-kid-purple to-kid-blue p-1 rounded-full mb-4">
            <div className="bg-white rounded-full p-3">
              <div className="text-4xl animate-float">🚀</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-kid-blue to-kid-purple">
            Your RIASEC Adventure Report
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your super skills and explore exciting future possibilities!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ReportCard 
            title="What Is This Report?"
            chipText="INTRODUCTION"
            chipColor="from-kid-blue to-kid-green"
          >
            <p className="mb-4">
              Have you ever wondered what kind of thinker you are? Do you like solving puzzles, building things, or being creative?
            </p>
            <p className="mb-4">
              The RIASEC test helps you discover your natural skills and interests so you can explore fun activities now and find careers that might be a great fit for you in the future!
            </p>
          </ReportCard>

          <ReportCard 
            title="Your Strengths & Interests!"
            chipText="TOP TRAITS"
            chipColor="from-kid-orange to-kid-red"
            delay="short"
          >
            <p className="mb-3">Your top three strengths shape how you learn, solve problems, and have fun:</p>
            
            <StrengthCard
              icon="🧠"
              title="Thinker (Investigative)"
              description="You love learning, researching, and figuring things out. You enjoy science, experiments, and solving mysteries."
              percentage={92}
              color="bg-kid-blue"
              delay={300}
            />
            
            <StrengthCard
              icon="🏗️"
              title="Builder (Realistic)"
              description="You like creating, fixing, and using your hands. You might enjoy building models, designing structures, or working with technology."
              percentage={85}
              color="bg-kid-green"
              delay={600}
              className="mt-4"
            />
            
            <StrengthCard
              icon="🎨"
              title="Creator (Artistic)"
              description="You have a strong imagination and love expressing yourself through drawing, writing, music, or acting."
              percentage={78}
              color="bg-kid-purple"
              delay={900}
              className="mt-4"
            />
          </ReportCard>
        </div>

        <ReportCard 
          title="Your Personal Skill Set!"
          chipText="TALENTS & ABILITIES"
          chipColor="from-kid-purple to-kid-pink"
          className="mb-6"
          delay="long"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-kid-blue/10 to-kid-blue/5">
              <div className="text-2xl mb-2">🔬</div>
              <h3 className="font-bold text-gray-800 mb-1">Investigative (Thinker - 92%)</h3>
              <p className="text-sm text-gray-600">
                You love solving challenges and discovering how things work. You probably enjoy science projects, strategy games, and trivia!
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-kid-green/10 to-kid-green/5">
              <div className="text-2xl mb-2">🛠️</div>
              <h3 className="font-bold text-gray-800 mb-1">Realistic (Builder - 85%)</h3>
              <p className="text-sm text-gray-600">
                You like to work with your hands, build things, and figure out practical solutions. You might enjoy coding, robotics, or engineering.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-kid-purple/10 to-kid-purple/5">
              <div className="text-2xl mb-2">🎭</div>
              <h3 className="font-bold text-gray-800 mb-1">Artistic (Creator - 78%)</h3>
              <p className="text-sm text-gray-600">
                You enjoy drawing, writing stories, or making music. You might love theater, filmmaking, or creative problem-solving.
              </p>
            </div>
          </div>
        </ReportCard>

        <ReportCard 
          title="Your Perfect Study Stream! 🎓"
          chipText="RECOMMENDED PATH"
          chipColor="from-kid-green to-kid-blue"
          className="mb-6"
        >
          <p className="mb-6 text-gray-700">
            Based on your RIASEC results, here's the study stream that matches your interests and strengths perfectly!
          </p>

          <div className="mb-6">
            <StreamCard
              name={streamData.recommended_stream.name}
              matchPercentage={streamData.recommended_stream.match_percentage}
              reasoning={streamData.recommended_stream.reasoning}
              subjects={streamData.recommended_stream.related_subjects}
              isRecommended={true}
            />
          </div>

          {streamData.recommended_stream.alternative_streams && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Alternative Option:</h3>
              {streamData.recommended_stream.alternative_streams.map((stream, index) => (
                <StreamCard
                  key={index}
                  name={stream.name}
                  matchPercentage={stream.match_percentage}
                  note={stream.note}
                />
              ))}
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">🌟</span>
              Future Career Possibilities
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {streamData.future_pathways.map((pathway, index) => (
                <PathwayCard
                  key={index}
                  title={pathway.title}
                  educationRequired={pathway.education_required}
                  description={pathway.description}
                  icon={index === 0 ? "💼" : index === 1 ? "👥" : "🎨"}
                />
              ))}
            </div>
          </div>
        </ReportCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ReportCard 
            title="Get Stream Ready! ⚡"
            chipText="NEXT STEPS"
            chipColor="from-kid-purple to-kid-pink"
          >
            <p className="mb-4 text-gray-700">Here's how you can start preparing for your chosen stream:</p>
            <div className="space-y-2">
              {streamData.stream_readiness_steps.map((step, index) => (
                <ReadinessStep key={index} step={step} index={index} type="stream" />
              ))}
            </div>
          </ReportCard>

          <ReportCard 
            title="Career Ready Steps! 💪"
            chipText="FUTURE PREP"
            chipColor="from-kid-green to-kid-yellow"
          >
            <p className="mb-4 text-gray-700">Start building your career foundation now:</p>
            <div className="space-y-2">
              {streamData.career_readiness_steps.map((step, index) => (
                <ReadinessStep key={index} step={step} index={index} type="career" />
              ))}
            </div>
          </ReportCard>
        </div>

        <ReportCard 
          title="Amazing Resources to Explore! 📚"
          chipText="LEARNING TOOLS"
          chipColor="from-kid-orange to-kid-red"
          className="mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">📚 Books to Read:</h4>
              <div className="space-y-3">
                {streamData.resources.books.map((book, index) => (
                  <ResourceCard
                    key={index}
                    title={book.title}
                    reason={book.reason}
                    type="book"
                  />
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">🎥 Videos & Websites:</h4>
              <div className="space-y-3">
                {streamData.resources.videos.map((video, index) => (
                  <ResourceCard
                    key={index}
                    title={video.title}
                    url={video.url}
                    type="video"
                  />
                ))}
                {streamData.resources.websites.map((website, index) => (
                  <ResourceCard
                    key={`website-${index}`}
                    title={website.replace('https://', '').replace('http://', '')}
                    url={website}
                    type="website"
                  />
                ))}
              </div>
            </div>
          </div>
        </ReportCard>

        <ReportCard 
          title="AI & Future Skills! 🤖"
          chipText="SMART TECHNOLOGY"
          chipColor="from-kid-purple to-kid-blue"
          className="mb-6"
        >
          <div className="mb-6">
            <p className="text-gray-700 mb-4">{aiData.ai_intro}</p>
            
            <div className="bg-gradient-to-r from-kid-blue/5 to-kid-purple/5 rounded-xl p-4 mb-6">
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">🌟</span>
                How AI is Used Today:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {aiData.how_ai_is_used_today.map((use, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-kid-blue text-sm">•</span>
                    <span className="text-sm text-gray-600">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">🎯</span>
              How AI Affects Your Favorite Things:
            </h4>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {aiData.how_ai_affects_your_favorite_things.map((item, index) => (
                <AIInterestCard
                  key={index}
                  interestArea={item.interest_area}
                  aiRole={item.ai_role}
                  youCanDo={item.you_can_do}
                  icon={index === 0 ? "🎨" : index === 1 ? "💝" : "🎮"}
                />
              ))}
            </div>

            <div className="bg-gradient-to-r from-kid-green/5 to-kid-yellow/5 rounded-xl p-4 mb-6">
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">⚡</span>
                Super Skills to Learn:
              </h4>
              <div className="space-y-2">
                {aiData.super_skills_to_learn.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-kid-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-kid-orange/5 to-kid-red/5 rounded-xl p-4 mb-6">
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">🚀</span>
                What You Can Do Right Now:
              </h4>
              <div className="space-y-2 mb-4">
                {aiData.ai_future_tips.what_you_can_do.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-kid-orange text-sm">•</span>
                    <span className="text-sm text-gray-600">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="bg-kid-yellow/20 border border-kid-yellow/30 rounded-lg p-3">
                <p className="text-sm text-gray-700 font-medium">
                  🛡️ Safety First: {aiData.ai_future_tips.stay_safe_note}
                </p>
              </div>
            </div>

            <h4 className="font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">🎁</span>
              Fun AI Resources to Explore:
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {aiData.fun_resources.map((resource, index) => (
                <AIResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  link={resource.link}
                  icon={index === 0 ? "🎮" : index === 1 ? "🧠" : "📺"}
                />
              ))}
            </div>
          </div>
        </ReportCard>

        <ReportCard 
          title="Your Soft Skills Superpowers! 💪"
          chipText="PEOPLE SKILLS"
          chipColor="from-kid-pink to-kid-purple"
          className="mb-6"
        >
          <p className="mb-6 text-gray-700">{softSkillsData.section_intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {softSkillsData.key_soft_skills.map((skill, index) => (
              <SoftSkillCard
                key={index}
                name={skill.name}
                whatItMeans={skill.what_it_means}
                howToPractice={skill.how_to_practice}
                icon={
                  skill.name === "Teamwork" ? "🤝" :
                  skill.name === "Communication" ? "💬" :
                  skill.name === "Problem Solving" ? "🧩" :
                  skill.name === "Creativity" ? "🎨" :
                  skill.name === "Empathy" ? "💝" :
                  skill.name === "Confidence" ? "⭐" : "💪"
                }
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-kid-blue/5 to-kid-purple/5 rounded-xl p-4 mb-6">
            <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
              <span className="mr-2">🎯</span>
              Daily Challenges to Try:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {softSkillsData.daily_challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-kid-blue text-sm">•</span>
                  <span className="text-sm text-gray-600">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-kid-green/5 to-kid-yellow/5 rounded-xl p-4 mb-6">
            <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
              <span className="mr-2">🌟</span>
              Why This Matters:
            </h4>
            <p className="text-sm text-gray-700">{softSkillsData.why_it_matters}</p>
          </div>

          <h4 className="font-semibold mb-4 text-gray-800 flex items-center">
            <span className="mr-2">🎪</span>
            Fun Activities to Build These Skills:
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {softSkillsData.fun_activity_ideas.map((activity, index) => (
              <SoftSkillActivityCard
                key={index}
                activity={activity.activity}
                softSkillsUsed={activity.soft_skills_used}
                icon={index === 0 ? "🏗️" : index === 1 ? "🎥" : "🤗"}
              />
            ))}
          </div>
        </ReportCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ReportCard 
            title="What Makes You Awesome?"
            chipText="YOUR SUPERPOWERS"
            chipColor="from-kid-yellow to-kid-orange"
          >
            <ActionItem icon="🌟" color="bg-kid-yellow">
              You think outside the box and come up with smart solutions.
            </ActionItem>
            
            <ActionItem icon="🌟" color="bg-kid-orange">
              You enjoy working on projects and figuring things out step by step.
            </ActionItem>
            
            <ActionItem icon="🌟" color="bg-kid-red">
              You love being creative, whether through art, music, or new ideas!
            </ActionItem>
          </ReportCard>

          <ReportCard 
            title="Growth Challenges & How to Improve!"
            chipText="LEVEL UP"
            chipColor="from-kid-green to-kid-blue"
          >
            <ActionItem icon="✅" color="bg-kid-blue">
              <strong>Teamwork Challenge</strong> – If you like working alone, try collaborating on a group project. It can be fun to share ideas!
            </ActionItem>
            
            <ActionItem icon="✅" color="bg-kid-green">
              <strong>Patience Test</strong> – If you get frustrated with rules, try setting small personal goals so you can still be creative but structured.
            </ActionItem>
            
            <ActionItem icon="✅" color="bg-kid-purple">
              <strong>Talk & Present</strong> – If you don't like super social situations, practice explaining your ideas to a friend or family member.
            </ActionItem>
          </ReportCard>
        </div>

        <ReportCard 
          title="Future Career Ideas!"
          chipText="FUTURE POSSIBILITIES"
          chipColor="from-kid-pink to-kid-red"
          className="mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <CareerCard
              icon="🔬"
              title="Engineer or Scientist"
              description="Design, invent, and solve cool problems!"
              bgColor="bg-gradient-to-br from-kid-blue/10 to-kid-blue/5"
            />
            
            <CareerCard
              icon="🎥"
              title="Filmmaker or Animator"
              description="Tell amazing stories through video!"
              bgColor="bg-gradient-to-br from-kid-purple/10 to-kid-purple/5"
            />
            
            <CareerCard
              icon="🛠️"
              title="Game Designer"
              description="Create fun apps or video games!"
              bgColor="bg-gradient-to-br from-kid-green/10 to-kid-green/5"
            />
            
            <CareerCard
              icon="🎭"
              title="Musician, Actor, or Writer"
              description="Express yourself in creative ways!"
              bgColor="bg-gradient-to-br from-kid-red/10 to-kid-red/5"
            />
            
            <CareerCard
              icon="🌍"
              title="Wildlife Biologist"
              description="Discover new creatures and ecosystems!"
              bgColor="bg-gradient-to-br from-kid-yellow/10 to-kid-yellow/5"
            />
            
            <CareerCard
              icon="🚀"
              title="Space Explorer"
              description="Study planets, stars, and space technology!"
              bgColor="bg-gradient-to-br from-kid-orange/10 to-kid-orange/5"
            />
          </div>
        </ReportCard>

        <ReportCard 
          title="What Can You Do Right Now?"
          chipText="TAKE ACTION TODAY"
          chipColor="from-kid-blue to-kid-purple"
          className="mb-10"
        >
          <div className="flex flex-wrap mb-4">
            <SkillBadge icon="🎲" text="Challenge Your Brain" />
            <SkillBadge icon="📝" text="Start a Project" />
            <SkillBadge icon="🔬" text="Explore New Hobbies" />
            <SkillBadge icon="🌍" text="Visit New Places" />
            <SkillBadge icon="🤝" text="Join a Club" />
            <SkillBadge icon="📚" text="Read About Careers" />
          </div>
          
          <div className="bg-gradient-to-r from-kid-blue/10 to-kid-purple/10 rounded-xl p-4">
            <h3 className="font-bold mb-2">Try These Activities:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-kid-blue mr-2">•</span>
                <span>Try science experiments or strategy games.</span>
              </li>
              <li className="flex items-start">
                <span className="text-kid-purple mr-2">•</span>
                <span>Build something cool, create a comic, or write a short story.</span>
              </li>
              <li className="flex items-start">
                <span className="text-kid-green mr-2">•</span>
                <span>Try coding, music, or a new sport!</span>
              </li>
              <li className="flex items-start">
                <span className="text-kid-orange mr-2">•</span>
                <span>Visit science museums, theaters, and workshops for inspiration.</span>
              </li>
            </ul>
          </div>
        </ReportCard>

        <div className="text-center space-y-4">
          <div className="inline-block animate-float">
            <Button asChild className="bg-gradient-to-r from-kid-green to-kid-blue hover:opacity-90 transition-opacity text-white rounded-full px-6 py-6 text-lg font-semibold shadow-lg hover:shadow-xl mr-4">
              <Link to="/goal-plan">
                My Goal Plan
              </Link>
            </Button>
          </div>
          <div className="inline-block animate-float">
            <Button asChild className="bg-gradient-to-r from-kid-blue to-kid-purple hover:opacity-90 transition-opacity text-white rounded-full px-6 py-6 text-lg font-semibold shadow-lg hover:shadow-xl">
              <Link to="/parents">
                For Parents
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiasecResult;
