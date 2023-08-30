export interface Bank {
    id: string;
    name: string;
    fullName: string;
    countries: Array<{
      displayName: string;
      countryCode2: string;
    }>;
    environmentType: string;
    credentialsType: string;
    media: Array<{
      source: string;
      type: string;
    }>;
    features: string[]; 
    institutionConsentId?: string;
    authorisationUrl?: string;

  }
  