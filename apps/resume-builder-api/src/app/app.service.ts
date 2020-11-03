import { Injectable } from '@nestjs/common';
import {
  Customer,
  Resume,
} from '@coderisland/resume-builder/domain/interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private readonly customer: Customer = {
    id: '1',
    resumes: [
      {
        id: '8a408822-992c-4ae6-95bf-58026bc97073',
        appliedFor: {
          companyName: 'Petronas ICT',
          dateApplied: '2020-08-04',
        },
        basics: {
          name: 'Lhar Gil',
          label: 'Software Developer',
          picture:
            'http://localhost:8080/images/lhargil.jpg?w=540&h=540',
          email: 'me@lhargil.com',
          phone: '',
          website: 'https://lhargil.com',
          summary: `I am a software developer, currently based in Kuala Lumpur, passionate about building web applications that help people become better versions of themselves. I am seeking for a highly-rewarding career in an environment that harnesses the skills and knowledge of individuals in securing the organization's success while providing them with opportunities for further professional advancement.`,
          location: {
            address: '2712 Broadway St',
            postalCode: 'CA 94115',
            city: 'San Francisco',
            countryCode: 'US',
            region: 'California',
          },
          profiles: [
            {
              network: 'Twitter',
              username: '@lhargil',
              url: 'https://twitter.com/lhargil',
            },
            {
              network: 'Instagram',
              username: '@lhar.gil',
              url: 'https://instagram.com/lhar.gil',
            },
            {
              network: 'GitHub',
              username: '@lhargil',
              url: 'https://github.com/lhargil',
            },
          ],
        },
        work: [
          {
            company: 'Inscale Asia Sdn Bhd',
            position: 'Software Developer',
            website: 'https://inscale.net',
            startDate: '2018-02-18',
            endDate: 'current',
            summary:
              'Work with a team as a full-stack developer in an AGILE environment to actively develop internal applications for a Scandinavian financial institution that are compliant with European regulations.',
            highlights: [
              'Participate in hackathons, together with like-minded team members, to come up with proofs-of-concept to formulate new solutions to a given problem. One of the hackathon ideas was eventually adopted and deployed to production to be used by stakeholders inside the organization.',
              'Chosen as one of the developers to be part of the initiative of streamlining some of the organization\'s core functions.',
              'Selected as one of the individuals tasked to periodically conduct tech interviews on prospective new employees enabling the organization to expand their pool of talented and highly-skilled professionals.',
            ],
          },
          {
            company: 'SimplyGiving.com',
            position: 'Senior Software Engineer',
            website: 'https://www.simplygiving.com/SimplyGiving/About',
            startDate: '2015-09-01',
            endDate: '2017-09-01',
            summary:
              'Performed the duties of a full-stack software engineer who work closely with the management to formulate, implement and maintain site features that enhances, among other things, user-acquisition activities, user engagement, site usability and systems integration.',
            highlights: [
              'Built a leaderboard feature for corporate clients that enabled SimplyGiving to gain more users through the acquisition of a large Hongkong-based events company. This feature opened up competitive fundraising among participants of a given event in various categories.',
              'Implemented a fundraising events solution that increased engagement of fundraisers and event participants by allowing them to dynamically create online forms and attach merchandising options to their event.',
              'Implemented a highly-requested feature to the site that made it possible for donors to regularly donate to their chosen charities. This added a recurring revenue-stream to Simplygiving.',
            ],
          },
          {
            company: 'BEpic BV (formerly Fusion Informatics)',
            position: 'Software Engineer',
            website: 'https://b-epic.nl/',
            startDate: '2014-05-01',
            endDate: '2015-08-31',
            summary:
              'Served as a full-stack developer utilizing various frameworks such as ASP.NET MVC, Web API and Unity 3D to build bespoke client applications, formulate gamified solutions and integrate with existing services',
            highlights: [
              'Built from the ground up, a web application and API solution that integrates with mobile applications that enable services-oriented companies to track the progress of their workers.',
              'Built a dashboard solution that enabled the client to change their records management from doing it directly in SQL Management Tool to a web-based form.',
              'Started a web application that served as a dashboard for players of a MMORPG where they can do transactions for items that are usable in-game.',
            ],
          },
          {
            company: 'Gemango Software Services, Inc.',
            position: 'Software Developer',
            website: 'https://www.gemango.com/',
            startDate: '2013-03-18',
            endDate: '2014-04-30',
            summary: 'Served as a backend developer that actively develop and maintain solutions for various clients of Gemango. Several frameworks such as Mono framework, ASP.NET Web API and Phonegap were used to deliver solutions to the client.',
            highlights: [
              'Ported the logbook and report generator from a VB6 application to VB.NET Mono in less time that previously estimated. The time savings helped Gemango in releasing the feature on time.',
              'Selected as one of the local team members to participate in the creation of new hybrid applications using Phonegap and ASP.NET Web API. This enabled Gemango to expand their list of solution offerings.',
            ],
          },
          {
            company: 'University of San Carlos',
            position: 'Web Developer',
            website: 'http://usc.edu.ph/',
            startDate: '2009-12-20',
            endDate: '2012-10-01',
            summary: 'Assigned as one of the full-stack developers who architected and developed the web-based information management system of the University of San Carlos that brought most of the core functions of the university online such as student admission, enrollment, payments, faculty management, and many more. The technical core comprised of ASP.NET MVC, jQuery and SQL Server.',
            highlights: [
              'Developed the online enrollment module with requisites handling, scheduling conflict handling and administrator overrides fully supported. This resulted to an improved student enrollment experience and turnout.',
              'Enhanced the university admission process by implementing the online student admission form with an automatic ID number generator and student ID photo capture using a web camera.',
              'Developed from the ground up the university manual tracking system that enabled users to organize, update and version various administrative manuals and related documents.'
            ],
          },
        ],
        volunteer: [
          {
            organization: 'Self projects',
            position: 'Volunteer',
            website: 'https://lhargil.com/apps',
            startDate: '2019-01-01',
            endDate: 'present',
            summary: 'Description...',
            highlights: [
              ''
            ],
          },
        ],
        education: [
          {
            institution: 'University of San Carlos',
            area: 'Bachelor of Science in Computer Science',
            studyType: 'Bachelor',
            startDate: '06-2004',
            endDate: '08-2008',
            gpa: '',
            courses: [],
          },
        ],
        awards: [],
        publications: [],
        skills: [
          {
            name: 'API development',
            level: 'Master',
            lastUsed: '2017',
            keywords: [
              'ASP.NET Core',
              'RESTful',
              'GraphQL',
              'Signalr',
              'NestJs',
              'Kafka',
            ],
          },
          {
            name: 'Frontend web development',
            level: 'Master',
            lastUsed: '2017',
            keywords: [
              'Angular',
              'Typescript',
              'Bootstrap',
              'TailwindCSS',
              'Javascript',
              'SCSS',
              'HTML',
              'CSS',
              'jQuery',
            ],
          },
          {
            name: 'DevOps',
            level: 'Master',
            lastUsed: '2017',
            keywords: [
              'Azure Devops pipelines',
              'Github actions',
              'Docker',
              'OpenShift',
            ],
          },
          {
            name: 'Source Control Management',
            level: 'Master',
            lastUsed: '2017',
            keywords: ['Git', 'SVN'],
          },
          {
            name: 'Databases',
            level: 'Master',
            lastUsed: '2017',
            keywords: ['SQL Server', 'MySQL', 'MongoDB'],
          },
        ],
        languages: [
          {
            language: 'Filipino',
            fluency: 'C2',
          },
          {
            language: 'English',
            fluency: 'C1',
          },
        ],
        interests: [
          {
            name: 'Photography',
            keywords: ['Macro', 'Street', 'Landscape', 'Timelapse'],
          },
          {
            name: 'Reading',
            keywords: [
              'Fiction',
              'Biography',
              'Political thriller',
              'Philosophy',
              'Software Development',
            ],
          },
        ],
        references: [
          {
            name: 'Rosana Ferolin',
            reference:
              'Manager, Department of Technology - University of San Carlos',
          },
          {
            name: 'Gert Monnissen',
            reference: 'CEO, Gemango Software Services Inc.',
          },
          {
            name: 'Jiok Min Lee',
            reference: 'Manager, Inscale Asia Sdn Bhd.',
          },
        ],
      },
    ],
  };

  getResume(id: string): Resume {
    return this.customer.resumes.find((r) => r.id == id);
  }

  getResumes(): Resume[] {
    return this.customer.resumes;
  }
}
