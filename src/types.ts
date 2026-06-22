/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
  badgeText?: string;
  metric?: string;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'coming-soon';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  clientName: string;
  year: string;
  status: ProjectStatus;
  scope: string[];
  longDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  keySkills: string[];
  signatureQuote: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  category: string;
  avatarUrl: string;
}
