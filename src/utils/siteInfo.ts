import data from '~/data/siteInfo.json';

export interface SiteInfo {
  address: string;
  city: string;
  phone: string;
  hotline: string;
  email: string;
  companyName: string;
  cvr: string;
  vacancies: number;
}

export const siteInfo: SiteInfo = data;

export default siteInfo;
