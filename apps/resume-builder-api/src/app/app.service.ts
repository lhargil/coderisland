import { Injectable } from '@nestjs/common';
import { Customer, Resume } from '@coderisland/resume-builder/domain/interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private readonly customer: Customer = {
    id: '1',
    resumes: [{
      id: '8a408822-992c-4ae6-95bf-58026bc97073',
      appliedFor: {
        companyName: 'Petronas ICT',
        dateApplied: '2020-08-04',
      },
      basics: {
        name: 'Lhar Gil',
        label: 'Software Developer',
        picture: 'https://en.gravatar.com/avatar/2c5f6ce39b195ce8fe1a8b7cab4e98ae',
        email: 'me@lhargil.com',
        phone: '',
        website: 'https://lhargil.com',
        summary: `I am a software developer, currently based in Kuala Lumpur, passionate about building web applications that help people become better versions of themselves. I am seeking for a highly-rewarding career in an environment that harnesses the skills and knowledge of individuals in building the organization's success while providing them with opportunities for further professional advancement.`,
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
            url: 'https://instagram.com/lhar.gil'
          },
          {
            network: 'Github',
            username: '@lhargil',
            url: 'https://github.com/lhargil'
          }
        ],
      },
      work: [
        {
          company: 'Inscale Asia Sdn Bhd',
          position: 'Software developer',
          website: 'https://inscale.net',
          startDate: '2018-02-18',
          endDate: 'current',
          summary: 'Work with a team in an AGILE environment to develop internal applications for a Scandinavian financial institution that are compliant to European regulations.',
          highlights: ['Help formulate new solutions to a given problem together with like-minded team members by coming with proof of concepts. One of the hackathon ideas was eventually adopted and deployed to production to be used by stakeholders inside the organization.', `Part of a select group of people that periodically conduct interviews on prospective new employees.`],
        },
        {
          company: 'SimplyGiving.com',
          position: 'Senior Software engineer',
          website: 'https://www.simplygiving.com/SimplyGiving/About',
          startDate: '2015-09-01',
          endDate: '2017-09-01',
          summary: 'Work closely with the management to formulate, implement and maintain features that enhances, among other things, user-acquisition activities, user engagement and site usability.',
          highlights: ['Built the Corporate Cup feature that enabled SimplyGiving to gain more users through the acquisition of a Hongkong-based events company. This feature opened up competitive fundraising among participants of a given event in various categories.', `Implemented Events PRO that increased engagement of fundraisers and event participants by allowing them to dynamically create forms and attach merchandising options to their event.`,
          `Implemented a highly-requested feature to the site that made it possible for donors to regularly donate to their chosen charities. This added a recurring revenue-stream to Simplygiving`],
        },
      ],
      volunteer: [
        {
          organization: 'Organization',
          position: 'Volunteer',
          website: 'http://organization.com/',
          startDate: '2012-01-01',
          endDate: '2013-01-01',
          summary: 'Description...',
          highlights: ["Awarded 'Volunteer of the Month'"],
        },
      ],
      education: [
        {
          institution: 'University',
          area: 'Software Development',
          studyType: 'Bachelor',
          startDate: '2011-01-01',
          endDate: '2013-01-01',
          gpa: '4.0',
          courses: ['DB1101 - Basic SQL'],
        },
      ],
      awards: [
        {
          title: 'Award',
          date: '2014-11-01',
          awarder: 'Company',
          summary: 'There is no spoon.',
        },
      ],
      publications: [
        {
          name: 'Publication',
          publisher: 'Company',
          releaseDate: '2014-10-01',
          website: 'http://publication.com',
          summary: 'Description...',
        },
      ],
      skills: [
        {
          name: 'Backend web development',
          level: 'Master',
          lastUsed: '2017',
          keywords: ['ASP.NET Core', 'Signalr', 'NestJs', 'REST', 'GraphQL'],
        },
        {
          name: 'DevOps',
          level: 'Master',
          lastUsed: '2017',
          keywords: ['Github actions', 'Azure Devops pipelines', 'Docker', 'OpenShift'],
        },
        {
          name: 'Frontend web development',
          level: 'Master',
          lastUsed: '2017',
          keywords: ['HTML', 'CSS', 'SCSS', 'Javascript', 'Typescript', 'Angular', 'TailwindCSS', 'Bootstrap'],
        },
        {
          name: 'Source Control',
          level: 'Master',
          lastUsed: '2017',
          keywords: ['Github', 'Azure Devops']
        },
        {
          name: 'Databases',
          level: 'Master',
          lastUsed: '2017',
          keywords: ['MSSQL', 'MYSQL', 'MongoDB']
        }
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
          keywords: ['Macro', 'Street', 'Scapes'],
        },
      ],
      references: [
        {
          name: 'Rosana Ferolin',
          reference: 'Manager, Department of Technology - University of San Carlos',
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
    }]
  };

  getResume(id: string): Resume {
    return this.customer.resumes.find(r => r.id == id);
  }

  getResumes(): Resume[] {
    return this.customer.resumes;
  }
}
