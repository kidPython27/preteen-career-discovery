
import React from 'react';
import ReportCard from '@/components/ReportCard';
import ActionItem from '@/components/ActionItem';
import SkillBadge from '@/components/SkillBadge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Target, BookOpen, Users } from 'lucide-react';

const GoalPlan = () => {
  const goalData = {
    "long_term_content": {
      "interests_to_explore": ["guitar playing", "badminton techniques"],
      "skills_to_build": ["musical skills", "physical fitness"],
      "learning_goals": ["Improve guitar playing", "Learn badminton strategies"],
      "group_or_family_activities": ["Family badminton matches", "Guitar jam sessions"],
      "recommended_books_or_videos": [
        {
          "title": "Guitar for Kids",
          "url": "https://www.example.com/guitar-for-kids"
        },
        {
          "title": "Badminton Basics",
          "url": "https://www.example.com/badminton-basics"
        }
      ]
    },
    "short_term_content": {
      "hobbies_or_projects": ["Learn a new guitar song", "Practice badminton drills"],
      "mini_skills_to_try": ["Basic guitar chords", "Badminton footwork"],
      "recommended_resources": [
        {
          "title": "YouTube Guitar Tutorials",
          "url": "https://www.youtube.com/guitar-tutorials"
        }
      ]
    },
    "tasks": [
      {
        "id": 5,
        "description": "Practice guitar for 30 minutes, 3 times a week",
        "due_in_weeks": 6,
        "category": "long_term"
      },
      {
        "id": 6,
        "description": "Learn and play one new song on guitar",
        "due_in_weeks": 2,
        "category": "short_term"
      }
    ]
  };

  return (
    <div className="min-h-screen pt-6 pb-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 opacity-100 transform translate-y-0 transition-all duration-700">
          <div className="inline-block bg-gradient-to-r from-kid-purple to-kid-blue p-1 rounded-full mb-4">
            <div className="bg-white rounded-full p-3">
              <div className="text-4xl animate-float">🎯</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-kid-blue to-kid-purple">
            Your Personal Goal Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to level up your skills? Here's your adventure roadmap!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ReportCard 
            title="Quick Wins (Next 2-6 Weeks!)"
            chipText="SHORT TERM"
            chipColor="from-kid-green to-kid-blue"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-kid-green" />
                  Cool Projects to Try
                </h4>
                {goalData.short_term_content.hobbies_or_projects.map((project, index) => (
                  <ActionItem key={index} icon="🎯" color="bg-kid-green">
                    {project}
                  </ActionItem>
                ))}
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-kid-blue" />
                  Mini Skills to Master
                </h4>
                <div className="flex flex-wrap">
                  {goalData.short_term_content.mini_skills_to_try.map((skill, index) => (
                    <SkillBadge key={index} icon="⚡" text={skill} />
                  ))}
                </div>
              </div>
            </div>
          </ReportCard>

          <ReportCard 
            title="Big Adventures (Next 6+ Weeks!)"
            chipText="LONG TERM"
            chipColor="from-kid-purple to-kid-pink"
            delay="short"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-kid-purple" />
                  Interests to Explore
                </h4>
                {goalData.long_term_content.interests_to_explore.map((interest, index) => (
                  <ActionItem key={index} icon="🌟" color="bg-kid-purple">
                    {interest}
                  </ActionItem>
                ))}
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-kid-pink" />
                  Skills to Build
                </h4>
                <div className="flex flex-wrap">
                  {goalData.long_term_content.skills_to_build.map((skill, index) => (
                    <SkillBadge key={index} icon="💪" text={skill} />
                  ))}
                </div>
              </div>
            </div>
          </ReportCard>
        </div>

        <ReportCard 
          title="Your Mission Tasks!"
          chipText="ACTION ITEMS"
          chipColor="from-kid-orange to-kid-red"
          className="mb-6"
          delay="long"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goalData.tasks.map((task) => (
              <div key={task.id} className={`p-4 rounded-xl ${task.category === 'short_term' ? 'bg-gradient-to-br from-kid-green/10 to-kid-green/5' : 'bg-gradient-to-br from-kid-purple/10 to-kid-purple/5'}`}>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-2 text-kid-orange" />
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    {task.due_in_weeks} weeks
                  </span>
                </div>
                <p className="text-gray-800 font-medium">{task.description}</p>
                <div className={`mt-2 inline-block px-2 py-1 rounded-full text-xs font-medium ${task.category === 'short_term' ? 'bg-kid-green text-white' : 'bg-kid-purple text-white'}`}>
                  {task.category === 'short_term' ? 'Quick Win' : 'Big Goal'}
                </div>
              </div>
            ))}
          </div>
        </ReportCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ReportCard 
            title="Fun with Family & Friends!"
            chipText="TOGETHER TIME"
            chipColor="from-kid-yellow to-kid-orange"
          >
            <div className="space-y-3">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2 text-kid-yellow" />
                Group Activities
              </h4>
              {goalData.long_term_content.group_or_family_activities.map((activity, index) => (
                <ActionItem key={index} icon="👥" color="bg-kid-yellow">
                  {activity}
                </ActionItem>
              ))}
            </div>
          </ReportCard>

          <ReportCard 
            title="Learning Resources!"
            chipText="HELPFUL STUFF"
            chipColor="from-kid-blue to-kid-green"
          >
            <div className="space-y-3">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-kid-blue" />
                Cool Resources
              </h4>
              {[...goalData.long_term_content.recommended_books_or_videos, ...goalData.short_term_content.recommended_resources].map((resource, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-kid-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                    📚
                  </div>
                  <div>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-kid-blue hover:text-kid-purple underline font-medium">
                      {resource.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ReportCard>
        </div>

        <ReportCard 
          title="Your Learning Goals!"
          chipText="LEVEL UP"
          chipColor="from-kid-pink to-kid-red"
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goalData.long_term_content.learning_goals.map((goal, index) => (
              <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-kid-pink/10 to-kid-pink/5 flex items-center">
                <div className="bg-kid-pink text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg">
                  🎯
                </div>
                <span className="font-medium text-gray-800">{goal}</span>
              </div>
            ))}
          </div>
        </ReportCard>

        <div className="text-center space-y-4">
          <div className="inline-block animate-float">
            <Button asChild className="bg-gradient-to-r from-kid-blue to-kid-purple hover:opacity-90 transition-opacity text-white rounded-full px-6 py-6 text-lg font-semibold shadow-lg hover:shadow-xl mr-4">
              <Link to="/">
                Back to Results
              </Link>
            </Button>
          </div>
          <div className="inline-block animate-float">
            <Button asChild className="bg-gradient-to-r from-kid-green to-kid-blue hover:opacity-90 transition-opacity text-white rounded-full px-6 py-6 text-lg font-semibold shadow-lg hover:shadow-xl">
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

export default GoalPlan;
