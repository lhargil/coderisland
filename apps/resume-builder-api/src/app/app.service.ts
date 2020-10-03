import { Injectable } from '@nestjs/common';
import { Customer, Resume } from '@coderisland/resume-builder/domain/interfaces';

@Injectable()
export class AppService {
  private readonly customer: Customer = {
    id: '1',
    resumes: [{
      id: 'abc',
      basics: {
        name: 'John Doe',
        label: 'Programmer',
        picture: '',
        email: 'john@gmail.com',
        phone: '(912) 555-4321',
        website: 'http://johndoe.com',
        summary: 'A summary of John Doe...',
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
            username: 'john',
            url: 'http://twitter.com/john',
          },
        ],
      },
      work: [
        {
          company: 'Company',
          position: 'President',
          website: 'http://company.com',
          startDate: '2013-01-01',
          endDate: '2014-01-01',
          summary: 'Description...',
          highlights: ['Started the company'],
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
  getData(): Resume {
    return this.customer.resumes.find(r => r.id == 'abc');
  }
}
