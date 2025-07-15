import React from 'react';
import ParentCard from '@/components/ParentCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Target, Users, BookOpen } from 'lucide-react';

const Parents = () => {
  const parentAdvice = [
    {
      "id": 5,
      "ria_sec_type": "Realistic",
      "title": "Encourage Outdoor Activities",
      "description": "Engaging in outdoor activities like badminton will help build Raghav's physical fitness and social skills.",
      "reasoning": "With a strong interest in badminton, encouraging outdoor play will help Raghav develop teamwork and fitness.",
      "suggested_activities": [
        "Join a local badminton club",
        "Organize family badminton games"
      ],
      "suggested_toys": [
        "Badminton racket",
        "Shuttlecocks"
      ],
      "suggested_games": [
        "Badminton tournaments",
        "Outdoor obstacle courses"
      ],
      "potential_challenges": [
        "Weather conditions",
        "Finding local clubs"
      ],
      "recommended_resources": [
        {
          "title": "Badminton for Beginners",
          "url": "https://www.example.com/badminton-beginners"
        }
      ],
      "estimated_time_commitment": "1-2 hours per week",
      "tone": "Encouraging and supportive",
      "category": "long_term"
    },
    {
      "id": 6,
      "ria_sec_type": "Realistic",
      "title": "Support Guitar Learning",
      "description": "Help Raghav find resources and practice time for learning guitar.",
      "reasoning": "Supporting his interest in music will enhance his confidence and skills.",
      "suggested_activities": [
        "Attend guitar lessons together",
        "Set up a practice schedule"
      ],
      "suggested_toys": [
        "Guitar tuner",
        "Music stand"
      ],
      "suggested_games": [
        "Music rhythm games"
      ],
      "potential_challenges": [
        "Staying motivated",
        "Finding time to practice"
      ],
      "recommended_resources": [
        {
          "title": "Guitar Chord Chart",
          "url": "https://www.example.com/guitar-chord-chart"
        }
      ],
      "estimated_time_commitment": "30 minutes per session",
      "tone": "Motivational and engaging",
      "category": "short_term"
    }
  ];

  const finalActionSteps = [
    {
      "id": 7,
      "title": "Set Up a Practice Schedule",
      "description": "Create a weekly schedule for Raghav's guitar and badminton practice to help him stay consistent."
    },
    {
      "id": 8,
      "title": "Join Him in Activities",
      "description": "Participate in badminton games or jam sessions to encourage his interests and spend quality time together."
    },
    {
      "id": 9,
      "title": "Explore Local Classes",
      "description": "Research local music or sports classes that can help Raghav develop his skills further."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-800">
            Information for Parents
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-kid-blue to-kid-purple mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding your child's RIASEC results and how to support their growth
          </p>
        </header>

        <ParentCard title="About This Report">
          <p className="mb-4">
            Dear Parents,
          </p>
          <p className="mb-4">
            This report provides a personalized insight into your child's strengths, interests, and potential career paths based on the RIASEC model (Realistic, Investigative, Artistic, Social, Enterprising, Conventional).
          </p>
          <p className="mb-4">
            At ages 10-13, children are beginning to form stronger identities and develop long-term interests. They may express curiosity about careers, talents, and the world around them. This report is designed to:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Highlight their natural strengths and preferences.</li>
            <li>Encourage skill-building through fun activities.</li>
            <li>Introduce career possibilities in an exciting, stress-free way.</li>
          </ul>
        </ParentCard>

        <ParentCard title="Understanding Your Child's Profile">
          <p className="mb-4">
            Your child's RIASEC scores reflect their dominant traits, shaping how they solve problems, engage in activities, and learn best.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Trait</th>
                  <th className="border-b px-4 py-2 text-left">What It Means for Your Child</th>
                  <th className="border-b px-4 py-2 text-left">How You Can Support Them</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-3 text-left">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🔬</span>
                      <span className="font-medium">Investigative (Thinker - 92%)</span>
                    </div>
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    Loves discovering new information, solving puzzles, and understanding how things work. Enjoys science, research, and deep thinking.
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Encourage STEM projects, brain teasers, and nature exploration.</li>
                      <li>Provide access to science kits, logic games, and documentaries.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-3 text-left">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🏗️</span>
                      <span className="font-medium">Realistic (Builder - 85%)</span>
                    </div>
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    Prefers hands-on learning, practical work, and using tools to create and fix things. May love engineering, robotics, or construction.
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Encourage building projects (LEGOs, robotics, DIY kits).</li>
                      <li>Enroll in coding, mechanical, or engineering workshops.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-3 text-left">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🎭</span>
                      <span className="font-medium">Artistic (Creator - 78%)</span>
                    </div>
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    Highly imaginative and expressive, enjoys drawing, music, writing, acting, or storytelling.
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Provide access to art supplies, music instruments, and creative writing tools.</li>
                      <li>Encourage theater, digital design, or animation courses.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ParentCard>

        <ParentCard title="Specific Activity Recommendations">
          <p className="mb-4">
            Based on your child's interests and strengths, here are specific recommendations tailored to their profile:
          </p>
          
          <div className="space-y-6">
            {parentAdvice.map((advice) => (
              <div key={advice.id} className="border-l-4 border-kid-blue bg-blue-50 p-4 rounded-r-lg">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 mr-2 text-kid-blue" />
                  <h4 className="font-bold text-lg text-gray-800">{advice.title}</h4>
                  <span className={`ml-auto px-2 py-1 rounded-full text-xs font-medium ${advice.category === 'short_term' ? 'bg-kid-green text-white' : 'bg-kid-purple text-white'}`}>
                    {advice.category === 'short_term' ? 'Short-term' : 'Long-term'}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{advice.description}</p>
                <p className="text-sm text-gray-600 italic mb-4">{advice.reasoning}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Suggested Activities
                    </h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {advice.suggested_activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Recommended Tools
                    </h5>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {advice.suggested_toys.map((toy, index) => (
                        <li key={index}>{toy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Potential Challenges</h5>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-amber-700">
                      {advice.potential_challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Time Commitment
                    </h5>
                    <p className="text-sm text-gray-600">{advice.estimated_time_commitment}</p>
                  </div>
                </div>
                
                {advice.recommended_resources.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Helpful Resources</h5>
                    <div className="space-y-1">
                      {advice.recommended_resources.map((resource, index) => (
                        <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="text-kid-blue hover:text-kid-purple underline text-sm block">
                          {resource.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ParentCard>

        <ParentCard title="Growth Challenges & How Parents Can Help">
          <p className="mb-4">
            Your child's dominant strengths indicate where they excel, but growth in other areas can help create a well-rounded skill set.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Challenge</th>
                  <th className="border-b px-4 py-2 text-left">How It Might Show Up</th>
                  <th className="border-b px-4 py-2 text-left">How to Support Their Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-3 text-left font-medium">
                    Teamwork & Social Skills
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    May prefer working alone, avoiding group projects.
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    Encourage collaborative activities like team sports, coding clubs, or debate teams.
                  </td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-3 text-left font-medium">
                    Flexibility & Patience
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    May struggle with rules, preferring independence over structured guidelines.
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    Allow free creativity but introduce small goal-based challenges (e.g., "Finish this project in 3 steps").
                  </td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-3 text-left font-medium">
                    Speaking Up & Communication
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    May be shy about expressing ideas in group settings.
                  </td>
                  <td className="border-b px-4 py-3 text-left text-sm">
                    Encourage storytelling, presentations, or drama workshops to build confidence.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ParentCard>

        <ParentCard title="Action Plan for Parents">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-kid-blue mr-2">1</span>
                Observe & Encourage
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Notice the hobbies they gravitate toward naturally.</li>
                <li>Offer positive reinforcement for both strengths and effort.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-kid-blue mr-2">2</span>
                Provide the Right Tools
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Invest in kits, courses, and clubs that match their interests.</li>
                <li>Introduce a variety of activities to develop new skills.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-kid-blue mr-2">3</span>
                Expose Them to New Experiences
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Take them to museums, tech expos, or creative workshops.</li>
                <li>Let them shadow professionals or participate in community projects.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-kid-blue mr-2">4</span>
                Foster Growth in Weak Areas
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Encourage teamwork through sports, projects, or family activities.</li>
                <li>Help them practice patience with step-by-step problem-solving games.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-kid-blue mr-2">5</span>
                Keep Career Talks Fun & Open
              </h4>
              <p className="text-sm mb-2">Instead of asking "What do you want to be?", try:</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>"What problems would you love to solve when you grow up?"</li>
                <li>"What's something you love doing, and how do you think you could use that in the future?"</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 border-t pt-6">
            <h4 className="font-bold text-lg mb-4 text-gray-800">Immediate Next Steps</h4>
            <div className="space-y-4">
              {finalActionSteps.map((step) => (
                <div key={step.id} className="bg-gradient-to-r from-kid-blue/10 to-kid-purple/10 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-800 mb-2 flex items-center">
                    <span className="bg-kid-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                      {step.id - 6}
                    </span>
                    {step.title}
                  </h5>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ParentCard>

        <ParentCard title="Final Thoughts for Parents">
          <p className="mb-4">
            This report is an early snapshot of their interests—they will evolve! The goal is to build confidence, curiosity, and self-awareness, setting the stage for lifelong learning and success.
          </p>
          
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Review this test every few years to track changes.</li>
            <li>Encourage exploration in both dominant and weaker areas.</li>
            <li>Celebrate their uniqueness—every child learns in their own way!</li>
          </ul>
          
          <div className="bg-blue-50 border-l-4 border-kid-blue p-4 rounded">
            <p className="text-sm flex items-start">
              <span className="text-kid-blue font-bold mr-2">Tip:</span>
              <span>Keep this page for yourself and share only the preteen-friendly part with your child!</span>
            </p>
          </div>
        </ParentCard>

        <div className="text-center mt-10 space-x-4">
          <Button asChild className="bg-gradient-to-r from-kid-blue to-kid-purple hover:opacity-90 transition-opacity text-white rounded-full px-6 py-2 text-lg font-semibold shadow-md">
            <Link to="/">
              Back to Results
            </Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-kid-green to-kid-blue hover:opacity-90 transition-opacity text-white rounded-full px-6 py-2 text-lg font-semibold shadow-md">
            <Link to="/goal-plan">
              View Goal Plan
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Parents;
