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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RiasecResult = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

        {/* Keep existing sections */}
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

        {/* NEW STREAM SELECTION SECTION */}
        <ReportCard 
          title="Your Perfect Study Stream! 🎓"
          chipText="RECOMMENDED PATH"
          chipColor="from-kid-green to-kid-blue"
          className="mb-6"
        >
          <p className="mb-6 text-gray-700">
            Based on your RIASEC results, here's the study stream that matches your interests and strengths perfectly!
          </p>

          {/* Recommended Stream */}
          <div className="mb-6">
            <StreamCard
              name={streamData.recommended_stream.name}
              matchPercentage={streamData.recommended_stream.match_percentage}
              reasoning={streamData.recommended_stream.reasoning}
              subjects={streamData.recommended_stream.related_subjects}
              isRecommended={true}
            />
          </div>

          {/* Alternative Stream */}
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

          {/* Future Career Pathways */}
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

        {/* Stream & Career Readiness Steps */}
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

        {/* Learning Resources */}
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

        {/* Keep existing sections */}
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
