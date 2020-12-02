import { Injectable } from '@nestjs/common';
import {
  Customer,
  Resume,
} from '@coderisland/resume-builder/domain/interfaces';
import { ResumeDocument, Resumex } from './schemas/resume.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { from, Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  private readonly customer: Customer = {
    id: '1',
    resumes: [
      {
        _id: '5faf71363e480a3860224cff',
        appliedFor: {
          companyName: "Company name",
          dateApplied: "2020-08-04",
        },
        basics: {
          name: "Lhar Gil",
          label: "Software Developer",
          picture:
            "https://omgimgflow.lhargil.com/images/lhargil.jpg?w=540&h=540",
          email: "me@lhargil.com",
          phone: "",
          website: "https://lhargil.com",
          summary: "I am a software developer, with nine years of experience, currently based in Kuala Lumpur, actively building web APIs and application solutions that help people become better versions of themselves.",
          objective: "I am seeking for a highly-rewarding career in an environment that harnesses the skills and knowledge of individuals in securing the organization's success while providing them with opportunities for further professional advancement.",
          location: {
            address: "2712 Broadway St",
            postalCode: "CA 94115",
            city: "San Francisco",
            countryCode: "US",
            region: "California",
          },
          profiles: [
            {
              network: "Twitter",
              username: "@lhargil",
              url: "https://twitter.com/lhargil",
            },
            {
              network: "Instagram",
              username: "@lhar.gil",
              url: "https://instagram.com/lhar.gil",
            },
            {
              network: "GitHub",
              username: "@lhargil",
              url: "https://github.com/lhargil",
            },
          ],
        },
        work: [
          {
            company: "Inscale Asia Sdn Bhd",
            position: "Software Developer",
            website: "https://inscale.net",
            startDate: "February, 2018",
            endDate: "current",
            summary:
              "Work with a team as a full-stack developer in an AGILE environment to actively develop internal applications for a Scandinavian financial institution that are compliant with European regulations.",
            highlights: [
              "Participate in hackathons, together with like-minded team members, to come up with proofs-of-concept to address the problem at hand. One of the hackathon ideas was eventually adopted and deployed to production to be used by stakeholders inside the organization.",
              "Chosen as one of the developers to be part of a new initiative to streamline some of the organization's core functions.",
              "Selected as one of the individuals tasked to periodically conduct tech interviews on prospective candidates, contributing to the organization's pool of talented and highly-skilled professionals.",
            ],
          },
          {
            company: "SimplyGiving.com",
            position: "Senior Software Engineer",
            website: "https://www.simplygiving.com/SimplyGiving/About",
            startDate: "September, 2015",
            endDate: "September, 2017",
            summary:
              "Performed the duties of a full-stack software engineer who work closely with the management to formulate, implement and maintain site features that enhances, among other things, user-acquisition activities, user engagement, site usability and systems integration.",
            highlights: [
              "Built a leaderboard feature for corporate clients that enabled SimplyGiving to gain more users through the acquisition of a large Hongkong-based events company. This feature opened up competitive fundraising among participants of a given event in various categories.",
              "Implemented a fundraising events solution that increased engagement of fundraisers and event participants by allowing them to dynamically create online forms and attach merchandising options to their event.",
              "Implemented a highly-requested feature to the site that made it possible for donors to regularly donate to their chosen charities. This added a recurring revenue-stream to Simplygiving.",
            ],
          },
          {
            company: "BEpic BV (formerly Fusion Informatics)",
            position: "Software Engineer",
            website: "https://b-epic.nl/",
            startDate: "May, 2014",
            endDate: "August, 2015",
            summary:
              "Served as a full-stack developer utilizing various frameworks such as ASP.NET MVC, Web API and Unity 3D to build bespoke client applications, formulate gamified solutions and integrate with existing services",
            highlights: [
              "Built from the ground up, a web application and API solution that integrates with mobile applications that enable services-oriented companies to track the progress of their workers.",
              "Built a dashboard solution that enabled the client to change their records management from doing it directly in SQL Management Tool to a web-based form.",
              "Started a web application that served as a dashboard for players of a MMORPG where they can do transactions for items that are usable in-game.",
            ],
          },
          {
            company: "Gemango Software Services, Inc.",
            position: "Software Developer",
            website: "https://www.gemango.com/",
            startDate: "March, 2013",
            endDate: "April, 2014",
            summary: "Served as a backend developer that actively develop and maintain solutions for various clients of Gemango. Several frameworks such as Mono framework, ASP.NET Web API and Phonegap were used to deliver solutions to the client.",
            highlights: [
              "Ported the logbook and report generator from a VB6 application to VB.NET Mono in less time that previously estimated. The time savings helped Gemango in releasing the feature on time.",
              "Selected as one of the local team members to participate in the creation of new hybrid applications using Phonegap and ASP.NET Web API. This enabled Gemango to expand their list of solution offerings.",
            ],
          },
          {
            company: "University of San Carlos",
            position: "Web Developer",
            website: "http://usc.edu.ph/",
            startDate: "December, 2009",
            endDate: "October, 2012",
            summary: "Assigned as one of the full-stack developers who architected and developed the web-based information management system of the University of San Carlos that brought most of the core functions of the university online such as student admission, enrollment, payments, faculty management, and many more. The technical core comprised of ASP.NET MVC, jQuery and SQL Server.",
            highlights: [
              "Developed the online enrollment module with requisites handling, scheduling conflict handling and administrator overrides fully supported. This resulted to an improved student enrollment experience and turnout.",
              "Enhanced the university admission process by digitalizing the online student admission form with an automatic ID number generator and student ID photo capture using a web camera.",
              "Developed from the ground up the university manual tracking system that enabled users to organize, update and version various administrative manuals and related documents."
            ],
          },
        ],
        volunteer: [
          {
            organization: "apps.lhargil.com",
            position: "Personal projets",
            website: "https://apps.lhargil.com",
            startDate: "January, 2019",
            endDate: "present",
            summary: "Carved a niche for myself in the interwebs where I can freely experiment with radical ideas and new technologies, implement fresh approaches to solutions, making and learning from mistakes along the way.",
            highlights: [
              "Dipped my toes into Linux administration by self-managing a Virtual Private Server.",
              "Embracing the importance of CI/CD practices at an early stage so software releases can be handled in an AGILE way.",
              "Being able to build fun apps with virtually no limits where I get to try out crazy ideas."
            ],
          },
        ],
        education: [
          {
            institution: "University of San Carlos",
            area: "Bachelor of Science in Computer Science",
            studyType: "Bachelor",
            startDate: "June, 2004",
            endDate: "March, 2008",
            gpa: "",
            courses: [],
            website: "http://usc.edu.ph/"
          },
        ],
        awards: [],
        publications: [],
        skills: [
          {
            name: "API development",
            level: "Master",
            lastUsed: "2017",
            keywords: [
              "ASP.NET Core",
              "RESTful",
              "GraphQL",
              "Signalr",
              "NestJS",
              "Apache Kafka",
              "ASP.NET MVC"
            ],
          },
          {
            name: "Frontend web development",
            level: "Master",
            lastUsed: "2017",
            keywords: [
              "Angular",
              "Typescript",
              "RxJS",
              "Bootstrap",
              "TailwindCSS",
              "Javascript",
              "Markdown",
              "SCSS",
              "HTML",
              "CSS",
              "jQuery",
            ],
          },
          {
            name: "DevOps",
            level: "Master",
            lastUsed: "2017",
            keywords: [
              "Azure Devops pipelines",
              "Github actions",
              "Docker",
            ],
          },
          {
            name: "Source Control Management",
            level: "Master",
            lastUsed: "2017",
            keywords: ["Git", "SVN"],
          },
          {
            name: "Databases",
            level: "Master",
            lastUsed: "2017",
            keywords: ["MongoDB", "SQL Server", "MySQL"],
          },
        ],
        languages: [
          {
            language: "Filipino",
            fluency: "C2",
          },
          {
            language: "English",
            fluency: "C1",
          },
        ],
        interests: [
          {
            name: "Photography",
            keywords: ["Macro", "Street", "Landscape", "Timelapse"],
          },
          {
            name: "Reading",
            keywords: [
              "Fiction",
              "Biography",
              "Political thriller",
              "Philosophy",
              "Software Development",
            ],
          },
          {
            name: "Stand-up comedy",
            keywords: []
          }
        ],
        references: [
          {
            name: "Rosana Ferolin",
            reference:
              "Manager, Department of Technology - University of San Carlos",
          },
          {
            name: "Gert Monnissen",
            reference: "CEO, Gemango Software Services Inc.",
          },
          {
            name: "Jiok Min Lee",
            reference: "Manager, Inscale Asia Sdn Bhd.",
          },
        ],
      },
    ],
  };

  constructor(@InjectModel(Resumex.name) private resumeModel: Model<ResumeDocument>) {

  }

  getResume(id: string): Observable<ResumeDocument> {
    return from(this.resumeModel.findById(id).exec());
  }

  getResumes(): Observable<ResumeDocument[]> {
    return from(this.resumeModel.find().exec());
  }
}
