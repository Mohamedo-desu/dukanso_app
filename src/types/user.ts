export interface USERPROPS {
  uid: string;
  display_name: string;
  email: string;
  photo_url: string;
  settings: SETTINGSPROPS;
  created_at: string;
  push_tokens: string[];
}

export interface SETTINGSPROPS {
  theme: string;
  notificationsEnabled: boolean;
}
