import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ResumeDocument = Resumex & Document;

@Schema({
  collection: 'resumes'
})
export class Resumex {
  @Prop(raw({
    companyName: { type: String },
    dateApplied: { type: String }
  }))
  appliedFor: Record<string, string>;

  @Prop(raw({
    name: { type: String },
    label: { type: String },
    picture: { type: String },
    email: { type: String },
    phone: { type: String },
    website: { type: String },
    summary: { type: String },
    objective: { type: String },
    location: raw({
      address: { type: String },
      postalCode: { type: String },
      city: { type: String },
      countryCode: { type: String },
      region: { type: String },
    }),
    profiles: [raw({
      network: { type: String },
      username: { type: String },
      url: { type: String },
    })]
  }))
  basics: Record<string, string>;

  @Prop(raw([{
    organization: { type: String },
    position: { type: String },
    website: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    summary: { type: String },
    highlights: [{ type: String }],
    company: { type: String },
  }]))
  work: Record<string, string>;

  @Prop(raw([{
    organization: { type: String },
    position: { type: String },
    website: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    summary: { type: String },
    highlights: [{ type: String }],
    company: { type: String },
  }]))
  volunteer: Record<string, string>;

  @Prop(raw([{
    institution: { type: String },
    area: { type: String },
    studyType: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    gpa: { type: String },
    courses: [{ type: String }],
    website: { type: String },
  }]))
  education: Record<string, string>;

  @Prop(raw([{
    title: { type: String },
    date: { type: String },
    awarder: { type: String },
    summary: { type: String },
  }]))
  awards: Record<string, string>;

  @Prop(raw([{
    name: { type: String },
    publisher: { type: String },
    releaseDate: { type: String },
    website: { type: String },
    summary: { type: String },
  }]))
  publications: Record<string, string>;

  @Prop(raw([{
    name: { type: String },
    level: { type: String },
    lastUsed: { type: String },
    keywords: [{ type: String }]
  }]))
  skills: Record<string, string>;

  @Prop(raw([{
    language: { type: String },
    fluency: { type: String },
  }]))
  languages: Record<string, string>;

  @Prop(raw([{
    name: { type: String },
    keywords: [{ type: String }],
  }]))
  interests: Record<string, string>;

  @Prop(raw([{
    name: {type: String},
    reference: {type: String}
  }]))
  references: Record<string, string>;
}

export const ResumeSchema = SchemaFactory.createForClass(Resumex);
