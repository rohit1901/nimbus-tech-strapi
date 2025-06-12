import type { Schema, Struct } from '@strapi/strapi';

export interface ResumeAward extends Struct.ComponentSchema {
  collectionName: 'components_resume_awards';
  info: {
    displayName: 'Award';
    icon: 'gift';
  };
  attributes: {
    awarder: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ResumeBasics extends Struct.ComponentSchema {
  collectionName: 'components_resume_basics';
  info: {
    displayName: 'Basic';
    icon: 'information';
  };
  attributes: {
    email: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'rohit.khanduri@hotmail.com'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    location: Schema.Attribute.Component<'resume.location', false>;
    name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Rohit Khanduri'>;
    profiles: Schema.Attribute.Component<'resume.profile', true>;
    summary: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface ResumeCertificate extends Struct.ComponentSchema {
  collectionName: 'components_resume_certificates';
  info: {
    displayName: 'Certificate';
    icon: 'shield';
  };
  attributes: {
    date: Schema.Attribute.Date;
    issuer: Schema.Attribute.String;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ResumeEducation extends Struct.ComponentSchema {
  collectionName: 'components_resume_educations';
  info: {
    displayName: 'Education';
    icon: 'monitor';
  };
  attributes: {
    area: Schema.Attribute.String;
    endDate: Schema.Attribute.Date;
    institution: Schema.Attribute.String;
    location: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    studyType: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ResumeLanguage extends Struct.ComponentSchema {
  collectionName: 'components_resume_languages';
  info: {
    displayName: 'Language';
    icon: 'magic';
  };
  attributes: {
    fluency: Schema.Attribute.String;
    language: Schema.Attribute.String;
  };
}

export interface ResumeLocation extends Struct.ComponentSchema {
  collectionName: 'components_resume_locations';
  info: {
    displayName: 'Location';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    countryCode: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    region: Schema.Attribute.String;
  };
}

export interface ResumeProfile extends Struct.ComponentSchema {
  collectionName: 'components_resume_profiles';
  info: {
    displayName: 'Profile';
    icon: 'user';
  };
  attributes: {
    network: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ResumePublication extends Struct.ComponentSchema {
  collectionName: 'components_resume_publications';
  info: {
    displayName: 'Publication';
    icon: 'filePdf';
  };
  attributes: {
    name: Schema.Attribute.String;
    publisher: Schema.Attribute.String;
    releaseDate: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface ResumeVolunteer extends Struct.ComponentSchema {
  collectionName: 'components_resume_volunteers';
  info: {
    displayName: 'Volunteer';
    icon: 'feather';
  };
  attributes: {
    endDate: Schema.Attribute.Date;
    highlights: Schema.Attribute.JSON;
    organisation: Schema.Attribute.String;
    position: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface ResumeWork extends Struct.ComponentSchema {
  collectionName: 'components_resume_works';
  info: {
    displayName: 'Work';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.Date;
    highlights: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'resume.award': ResumeAward;
      'resume.basics': ResumeBasics;
      'resume.certificate': ResumeCertificate;
      'resume.education': ResumeEducation;
      'resume.language': ResumeLanguage;
      'resume.location': ResumeLocation;
      'resume.profile': ResumeProfile;
      'resume.publication': ResumePublication;
      'resume.volunteer': ResumeVolunteer;
      'resume.work': ResumeWork;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
